import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals, request }) => {
	if (!locals.user) throw error(401, 'Login required');

	const { id } = await request.json();
	if (typeof id !== 'string') throw error(400, 'Missing credential ID');

	const passkey = await db.passkey.findUnique({ where: { id } });
	if (!passkey || passkey.userId !== locals.user.id) {
		throw error(404, 'Passkey not found');
	}

	await db.passkey.delete({ where: { id } });
	return json({ ok: true });
};
