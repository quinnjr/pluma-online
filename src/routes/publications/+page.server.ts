import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const publications = await db.publication.findMany({
		orderBy: [{ year: 'desc' }, { title: 'asc' }],
		select: {
			title: true,
			authors: true,
			year: true,
			venue: true,
			volume: true,
			issue: true,
			pages: true,
			doi: true,
			url: true
		}
	});
	return { publications };
};
