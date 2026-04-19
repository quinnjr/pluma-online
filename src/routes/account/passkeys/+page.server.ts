import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) throw redirect(303, '/login?redirectTo=/account/passkeys');

	const passkeys = await db.passkey.findMany({
		where: { userId: locals.user.id },
		orderBy: { createdAt: 'desc' },
		select: {
			id: true,
			label: true,
			deviceType: true,
			backedUp: true,
			createdAt: true
		}
	});

	return { passkeys };
};
