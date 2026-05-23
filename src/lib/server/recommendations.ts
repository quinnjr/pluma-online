import { Prisma } from '@prisma/client';
import { db } from './db';

export const DIRECTIONS = ['after', 'before', 'both'] as const;
export type Direction = (typeof DIRECTIONS)[number];

// Bounds the prior-event window per session so very long sessions don't
// generate quadratic edge writes per event.
const SESSION_WINDOW = 32;

// Cap pairs per bulk upsert so the bound-parameter count stays well under
// Postgres's 65535 limit (each pair contributes 2 parameters).
const EDGE_CHUNK = 1000;

// Retention window for raw edit events. Anything older is dead weight: the
// recommendation engine only reads the last SESSION_WINDOW events per session.
const EVENT_RETENTION_MS = 30 * 24 * 60 * 60 * 1000;

// Probability of running event-table cleanup on each recordEditEvent call.
// At ~1/1000 calls, a moderately busy service runs cleanup every few minutes
// without holding cleanup on the request path most of the time.
const CLEANUP_PROBABILITY = 1 / 1000;

export async function recordPipelineComposition(
	pluginIdsInOrder: readonly number[]
): Promise<void> {
	const seen = new Set<bigint>();
	const pairs: Array<[number, number]> = [];
	for (let i = 0; i < pluginIdsInOrder.length; i++) {
		for (let j = i + 1; j < pluginIdsInOrder.length; j++) {
			const a = pluginIdsInOrder[i];
			const b = pluginIdsInOrder[j];
			if (a === b) continue;
			// Pack the ordered pair into one bigint to dedupe repeated-plugin pipelines.
			const key = (BigInt(a) << 32n) | BigInt(b);
			if (seen.has(key)) continue;
			seen.add(key);
			pairs.push([a, b]);
		}
	}
	await bumpEdges(pairs);
}

export async function recordEditEvent(args: {
	sessionId: string;
	pluginId: number;
	userId?: number | null;
}): Promise<void> {
	const { sessionId, pluginId, userId } = args;

	// A concurrent event in the same session may miss this one in its window;
	// acceptable for an aggregate counter.
	const [prior] = await Promise.all([
		db.pluginEditEvent.findMany({
			where: { sessionId },
			orderBy: { createdAt: 'desc' },
			take: SESSION_WINDOW,
			select: { pluginId: true }
		}),
		db.pluginEditEvent.create({
			data: { sessionId, pluginId, userId: userId ?? null }
		})
	]);

	const pairs: Array<[number, number]> = [];
	const seen = new Set<number>();
	for (const { pluginId: priorId } of prior) {
		if (priorId === pluginId || seen.has(priorId)) continue;
		seen.add(priorId);
		pairs.push([priorId, pluginId]);
	}
	await bumpEdges(pairs);

	if (Math.random() < CLEANUP_PROBABILITY) {
		void cleanupOldEvents();
	}
}

async function cleanupOldEvents(): Promise<void> {
	const cutoff = new Date(Date.now() - EVENT_RETENTION_MS);
	await db.pluginEditEvent.deleteMany({ where: { createdAt: { lt: cutoff } } });
}

async function bumpEdges(pairs: ReadonlyArray<[number, number]>): Promise<void> {
	if (pairs.length === 0) return;
	for (let i = 0; i < pairs.length; i += EDGE_CHUNK) {
		const slice = pairs.slice(i, i + EDGE_CHUNK);
		const values = Prisma.join(
			slice.map(([from, to]) => Prisma.sql`(${from}, ${to}, 1, NOW())`)
		);
		await db.$executeRaw`
			INSERT INTO "PluginEdge" ("fromPluginId", "toPluginId", "weight", "updatedAt")
			VALUES ${values}
			ON CONFLICT ("fromPluginId", "toPluginId")
			DO UPDATE SET "weight" = "PluginEdge"."weight" + 1, "updatedAt" = NOW()
		`;
	}
}

export type Recommendation = {
	pluginId: number;
	name: string;
	description: string;
	weight: number;
};

export async function recommendationsFor(
	pluginId: number,
	opts: { limit?: number; direction?: Direction } = {}
): Promise<Recommendation[]> {
	const limit = Math.min(Math.max(opts.limit ?? 5, 1), 50);
	const direction = opts.direction ?? 'after';

	const [afterRows, beforeRows] = await Promise.all([
		direction === 'before'
			? Promise.resolve([])
			: fetchEdges('after', pluginId, limit * 2),
		direction === 'after'
			? Promise.resolve([])
			: fetchEdges('before', pluginId, limit * 2)
	]);

	// `take: limit*2` per side is an approximation when merging both directions:
	// a plugin with moderate weight on both sides could rank above a one-sided
	// heavy hitter and still be missed. Acceptable for a recommendation list.
	const merged = new Map<number, number>();
	for (const r of afterRows) merged.set(r.otherId, (merged.get(r.otherId) ?? 0) + r.weight);
	for (const r of beforeRows) merged.set(r.otherId, (merged.get(r.otherId) ?? 0) + r.weight);

	const topIds = [...merged.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);
	if (topIds.length === 0) return [];

	const plugins = await db.plugin.findMany({
		where: { id: { in: topIds.map(([id]) => id) } },
		select: { id: true, name: true, description: true }
	});
	const byId = new Map(plugins.map((p) => [p.id, p]));

	return topIds.flatMap(([id, weight]) => {
		const p = byId.get(id);
		return p ? [{ pluginId: id, name: p.name, description: p.description, weight }] : [];
	});
}

async function fetchEdges(
	side: 'after' | 'before',
	pluginId: number,
	take: number
): Promise<Array<{ otherId: number; weight: number }>> {
	if (side === 'after') {
		const rows = await db.pluginEdge.findMany({
			where: { fromPluginId: pluginId },
			orderBy: { weight: 'desc' },
			take,
			select: { toPluginId: true, weight: true }
		});
		return rows.map((r) => ({ otherId: r.toPluginId, weight: r.weight }));
	}
	const rows = await db.pluginEdge.findMany({
		where: { toPluginId: pluginId },
		orderBy: { weight: 'desc' },
		take,
		select: { fromPluginId: true, weight: true }
	});
	return rows.map((r) => ({ otherId: r.fromPluginId, weight: r.weight }));
}
