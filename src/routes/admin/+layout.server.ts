import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, parent }) => {
	if (!locals.user) throw redirect(303, '/login?redirectTo=/admin');

	const ability = locals.ability;
	const { stats } = await parent();

	const [pendingUserCount, publicationCount, peopleCount] = await Promise.all([
		db.user.count({ where: { enabled: false } }),
		db.publication.count(),
		db.person.count()
	]);

	return {
		counts: {
			pendingUsers: pendingUserCount,
			plugins: stats.pluginCount,
			pipelines: stats.pipelineCount,
			publications: publicationCount,
			people: peopleCount
		},
		can: {
			managePlugins: ability.can('manage', 'Plugin'),
			managePipelines: ability.can('manage', 'Pipeline'),
			managePublications: ability.can('manage', 'Publication'),
			managePeople: ability.can('manage', 'Person'),
			manageCategories: ability.can('manage', 'Category'),
			manageLanguages: ability.can('manage', 'Language'),
			verifyUsers: ability.can('verify', 'User'),
			promoteUsers: ability.can('promote', 'User')
		}
	};
};
