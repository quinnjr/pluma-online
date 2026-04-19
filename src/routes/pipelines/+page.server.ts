import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const pipelines = await db.pipeline.findMany({
		orderBy: [{ status: 'asc' }, { name: 'asc' }]
	});
	return { pipelines };
};
