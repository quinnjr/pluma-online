import { db } from '$lib/server/db';
import { serializeAbility } from '$lib/abilities';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const [pluginCount, categoryCount, languageCount, pipelineCount] = await Promise.all([
		db.plugin.count(),
		db.category.count(),
		db.language.count(),
		db.pipeline.count()
	]);

	return {
		stats: { pluginCount, categoryCount, languageCount, pipelineCount },
		currentUser: locals.user
			? {
					id: locals.user.id,
					email: locals.user.email,
					displayName: locals.user.displayName,
					role: locals.user.role,
					enabled: locals.user.enabled
				}
			: null,
		abilityRules: serializeAbility(locals.ability)
	};
};
