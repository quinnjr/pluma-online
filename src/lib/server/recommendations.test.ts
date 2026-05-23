import { describe, it, expect, vi, beforeEach } from 'vitest';

type Edge = { fromPluginId: number; toPluginId: number; weight: number };
type Event = { sessionId: string; pluginId: number; userId: number | null; createdAt: Date };

const state = {
	edges: [] as Edge[],
	events: [] as Event[],
	plugins: [] as Array<{ id: number; name: string; description: string }>,
	executeRawCalls: 0
};

const db = {
	pluginEditEvent: {
		findMany: vi.fn(
			async (args: { where: { sessionId: string }; take: number }) =>
				state.events
					.filter((e) => e.sessionId === args.where.sessionId)
					.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
					.slice(0, args.take)
					.map((e) => ({ pluginId: e.pluginId }))
		),
		create: vi.fn(
			async (args: { data: { sessionId: string; pluginId: number; userId: number | null } }) => {
				state.events.push({ ...args.data, createdAt: new Date() });
				return args.data;
			}
		),
		deleteMany: vi.fn(async () => ({ count: 0 }))
	},
	pluginEdge: {
		findMany: vi.fn(
			async (args: {
				where: { fromPluginId?: number; toPluginId?: number };
				take: number;
				select: { toPluginId?: true; fromPluginId?: true; weight: true };
			}) => {
				const rows = state.edges
					.filter((e) =>
						'fromPluginId' in args.where
							? e.fromPluginId === args.where.fromPluginId
							: e.toPluginId === args.where.toPluginId
					)
					.sort((a, b) => b.weight - a.weight)
					.slice(0, args.take);
				return rows.map((r) =>
					args.select.toPluginId
						? { toPluginId: r.toPluginId, weight: r.weight }
						: { fromPluginId: r.fromPluginId, weight: r.weight }
				);
			}
		)
	},
	plugin: {
		findMany: vi.fn(async (args: { where: { id: { in: number[] } } }) =>
			state.plugins.filter((p) => args.where.id.in.includes(p.id))
		)
	},
	// $executeRaw is invoked as a tagged template; capture pairs by parsing the
	// interpolated strings array. The mock just sums increments into state.edges.
	$executeRaw: vi.fn(async (_strings: TemplateStringsArray, ..._values: unknown[]) => {
		state.executeRawCalls++;
		return 0;
	})
};

vi.mock('./db', () => ({ db }));
vi.mock('@prisma/client', () => ({
	Prisma: {
		sql: (strings: TemplateStringsArray, ...values: unknown[]) => ({ strings, values }),
		join: (parts: Array<{ strings: TemplateStringsArray; values: unknown[] }>) => {
			const flat: unknown[] = [];
			for (const p of parts) flat.push(...p.values);
			return { strings: [''], values: flat };
		}
	}
}));

// $executeRaw receives the outer tagged-template values; values[0] is the
// Prisma.join wrapper holding the flat list of bound (from, to, from, to, ...)
// numbers. Apply the increments so recommendationsFor sees the resulting state.
db.$executeRaw.mockImplementation(async (_strings: TemplateStringsArray, ...values: unknown[]) => {
	state.executeRawCalls++;
	const joined = values[0] as { values: number[] };
	const flat = joined.values;
	for (let i = 0; i < flat.length; i += 2) {
		const from = flat[i];
		const to = flat[i + 1];
		const existing = state.edges.find((e) => e.fromPluginId === from && e.toPluginId === to);
		if (existing) existing.weight += 1;
		else state.edges.push({ fromPluginId: from, toPluginId: to, weight: 1 });
	}
	return flat.length / 2;
});

const { recordPipelineComposition, recordEditEvent, recommendationsFor, DIRECTIONS } = await import(
	'./recommendations'
);

beforeEach(() => {
	state.edges = [];
	state.events = [];
	state.plugins = [];
	state.executeRawCalls = 0;
	vi.clearAllMocks();
});

describe('recordPipelineComposition', () => {
	it('is a no-op for 0 or 1 plugins', async () => {
		await recordPipelineComposition([]);
		await recordPipelineComposition([42]);
		expect(state.executeRawCalls).toBe(0);
		expect(state.edges).toHaveLength(0);
	});

	it('generates one edge per ordered pair for 3 plugins', async () => {
		await recordPipelineComposition([1, 2, 3]);
		expect(state.edges).toHaveLength(3);
		expect(state.edges.map((e) => [e.fromPluginId, e.toPluginId])).toEqual([
			[1, 2],
			[1, 3],
			[2, 3]
		]);
		expect(state.edges.every((e) => e.weight === 1)).toBe(true);
	});

	it('dedupes repeated pairs when a plugin appears twice in the same pipeline', async () => {
		await recordPipelineComposition([1, 2, 1, 3]);
		// (1,3) would appear twice without dedup. Each unique pair gets exactly weight 1.
		const counts = new Map(state.edges.map((e) => [`${e.fromPluginId},${e.toPluginId}`, e.weight]));
		expect(counts.get('1,3')).toBe(1);
	});
});

describe('recordEditEvent', () => {
	it('creates an event and no edges when the session is empty', async () => {
		await recordEditEvent({ sessionId: 's1', pluginId: 10 });
		expect(state.events).toHaveLength(1);
		expect(state.edges).toHaveLength(0);
	});

	it('bumps edges from each unique prior plugin to the new one', async () => {
		await recordEditEvent({ sessionId: 's1', pluginId: 10 });
		await recordEditEvent({ sessionId: 's1', pluginId: 20 });
		await recordEditEvent({ sessionId: 's1', pluginId: 30 });
		const byPair = new Map(state.edges.map((e) => [`${e.fromPluginId}->${e.toPluginId}`, e.weight]));
		expect(byPair.get('10->20')).toBe(1);
		expect(byPair.get('10->30')).toBe(1);
		expect(byPair.get('20->30')).toBe(1);
	});

	it('skips priors that match the new pluginId', async () => {
		await recordEditEvent({ sessionId: 's1', pluginId: 5 });
		await recordEditEvent({ sessionId: 's1', pluginId: 5 });
		expect(state.edges).toHaveLength(0);
	});

	it('does not cross-contaminate sessions', async () => {
		await recordEditEvent({ sessionId: 'a', pluginId: 1 });
		await recordEditEvent({ sessionId: 'b', pluginId: 2 });
		expect(state.edges).toHaveLength(0);
	});
});

describe('recommendationsFor', () => {
	beforeEach(() => {
		state.plugins = [
			{ id: 2, name: 'B', description: 'b' },
			{ id: 3, name: 'C', description: 'c' },
			{ id: 4, name: 'D', description: 'd' }
		];
		state.edges = [
			{ fromPluginId: 1, toPluginId: 2, weight: 10 },
			{ fromPluginId: 1, toPluginId: 3, weight: 5 },
			{ fromPluginId: 4, toPluginId: 1, weight: 7 }
		];
	});

	it('returns plugins ordered by weight desc for direction=after', async () => {
		const recs = await recommendationsFor(1, { direction: 'after' });
		expect(recs.map((r) => r.pluginId)).toEqual([2, 3]);
		expect(recs[0].weight).toBe(10);
	});

	it('returns predecessors for direction=before', async () => {
		const recs = await recommendationsFor(1, { direction: 'before' });
		expect(recs.map((r) => r.pluginId)).toEqual([4]);
	});

	it('merges both sides for direction=both', async () => {
		const recs = await recommendationsFor(1, { direction: 'both' });
		const ids = recs.map((r) => r.pluginId);
		expect(ids).toContain(2);
		expect(ids).toContain(3);
		expect(ids).toContain(4);
	});

	it('clamps limit to [1, 50]', async () => {
		const r0 = await recommendationsFor(1, { limit: 0 });
		expect(r0.length).toBeGreaterThanOrEqual(1);
		const r100 = await recommendationsFor(1, { limit: 100 });
		expect(r100.length).toBeLessThanOrEqual(50);
	});

	it('returns [] when no edges match', async () => {
		const recs = await recommendationsFor(999);
		expect(recs).toEqual([]);
	});
});

describe('DIRECTIONS', () => {
	it('exposes the three supported directions', () => {
		expect(DIRECTIONS).toEqual(['after', 'before', 'both']);
	});
});
