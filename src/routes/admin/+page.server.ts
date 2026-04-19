import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const recentUsers = await db.user.findMany({
		orderBy: { createdAt: 'desc' },
		take: 5,
		select: {
			id: true,
			email: true,
			displayName: true,
			role: true,
			enabled: true,
			createdAt: true
		}
	});
	return { recentUsers };
};
