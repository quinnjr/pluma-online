import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { getReadme } from '$lib/server/readme';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.id);
	if (!Number.isInteger(id) || id <= 0) throw error(400, 'Invalid id');

	const entity = await db.pipeline.findUnique({
		where: { id },
		select: {
			id: true,
			name: true,
			description: true,
			githubUrl: true,
			status: true,
			rating: true,
			author: { select: { displayName: true } },
			updatedAt: true
		}
	});
	if (!entity) throw error(404, 'Pipeline not found');

	const readme = await getReadme({
		ownerType: 'Pipeline',
		ownerId: id,
		githubUrl: entity.githubUrl
	});

	return {
		entity,
		readmeHtml: readme.html ?? null,
		readmeStatus: readme.status
	};
};
