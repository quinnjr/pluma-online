import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const pipelines = await db.pipeline.findMany({
		orderBy: [{ status: 'asc' }, { name: 'asc' }],
		select: { id: true, name: true, description: true, status: true, githubUrl: true }
	});
	return { pipelines };
};
