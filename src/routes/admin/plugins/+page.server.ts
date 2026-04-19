import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	enforce(locals.ability, 'read', 'Plugin');

	const q = url.searchParams.get('q')?.trim() ?? '';
	const take = 50;
	const page = Math.max(1, Number(url.searchParams.get('page') ?? 1));
	const where = q
		? {
				OR: [
					{ name: { contains: q } },
					{ description: { contains: q } },
					{ category: { name: { contains: q } } }
				]
			}
		: {};

	const [plugins, total] = await Promise.all([
		db.plugin.findMany({
			where,
			orderBy: [{ updatedAt: 'desc' }],
			skip: (page - 1) * take,
			take,
			select: {
				id: true,
				name: true,
				description: true,
				githubUrl: true,
				verified: true,
				category: { select: { name: true } },
				language: { select: { name: true } },
				updatedAt: true
			}
		}),
		db.plugin.count({ where })
	]);

	return { plugins, total, page, take, q };
};

export const actions: Actions = {
	delete: async ({ locals, request }) => {
		enforce(locals.ability, 'delete', 'Plugin');
		const form = await request.formData();
		const id = Number(form.get('id'));
		if (!Number.isFinite(id)) return fail(400, { error: 'Bad id' });
		await db.plugin.delete({ where: { id } });
		return { ok: true };
	}
};
