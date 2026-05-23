import { json, error } from '@sveltejs/kit';
import { Prisma } from '@prisma/client';
import { recordEditEvent } from '$lib/server/recommendations';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals, request }) => {
	if (!locals.user) throw error(401, 'Login required');

	const body = await request.json().catch(() => null);
	if (!body || typeof body !== 'object') throw error(400, 'Invalid JSON body');

	const { pluginId } = body as { pluginId?: unknown };
	if (typeof pluginId !== 'number' || !Number.isInteger(pluginId) || pluginId <= 0) {
		throw error(400, 'Invalid pluginId');
	}

	try {
		await recordEditEvent({
			sessionId: locals.editorSession,
			pluginId,
			userId: locals.user.id
		});
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
			throw error(400, 'Unknown pluginId');
		}
		throw err;
	}

	return json({ ok: true });
};
