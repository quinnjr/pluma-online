import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [plugins, categories, languages] = await Promise.all([
		db.plugin.findMany({
			orderBy: [{ category: { name: 'asc' } }, { name: 'asc' }],
			select: {
				id: true,
				name: true,
				description: true,
				githubUrl: true,
				category: { select: { name: true } },
				language: { select: { name: true } }
			}
		}),
		db.category.findMany({
			orderBy: { name: 'asc' },
			select: { name: true, _count: { select: { plugins: true } } }
		}),
		db.language.findMany({
			orderBy: { name: 'asc' },
			select: { name: true, _count: { select: { plugins: true } } }
		})
	]);

	return {
		plugins: plugins.map((p) => ({
			id: p.id,
			name: p.name,
			description: p.description,
			githubUrl: p.githubUrl,
			category: p.category.name,
			language: p.language.name
		})),
		categories: categories.map((c) => ({ name: c.name, count: c._count.plugins })),
		languages: languages.map((l) => ({ name: l.name, count: l._count.plugins }))
	};
};
