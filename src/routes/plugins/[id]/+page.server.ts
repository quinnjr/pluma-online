import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { getReadme } from '$lib/server/readme';
import { recommendationsFor } from '$lib/server/recommendations';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.id);
	if (!Number.isInteger(id) || id <= 0) throw error(400, 'Invalid id');

	const entity = await db.plugin.findUnique({
		where: { id },
		select: {
			id: true,
			name: true,
			description: true,
			githubUrl: true,
			rating: true,
			category: { select: { name: true } },
			language: { select: { name: true } },
			author: { select: { displayName: true } },
			updatedAt: true
		}
	});
	if (!entity) throw error(404, 'Plugin not found');

	const [readme, recommendations] = await Promise.all([
		getReadme({ ownerType: 'Plugin', ownerId: id, githubUrl: entity.githubUrl }),
		recommendationsFor(id, { direction: 'both', limit: 6 }).catch((err) => {
			console.error('[plugins/detail] recommendationsFor failed', err);
			return [];
		})
	]);

	return {
		entity,
		readmeHtml: readme.html ?? null,
		readmeStatus: readme.status,
		recommendations
	};
};
