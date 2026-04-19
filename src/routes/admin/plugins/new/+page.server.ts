import { fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'create', 'Plugin');
	const [categories, languages] = await Promise.all([
		db.category.findMany({ orderBy: { name: 'asc' } }),
		db.language.findMany({ orderBy: { name: 'asc' } })
	]);
	return { categories, languages };
};

export const actions: Actions = {
	default: async ({ locals, request }) => {
		enforce(locals.ability, 'create', 'Plugin');
		const form = await request.formData();
		const name = String(form.get('name') ?? '').trim();
		const description = String(form.get('description') ?? '').trim();
		const githubUrl = String(form.get('githubUrl') ?? '').trim();
		const categoryId = Number(form.get('categoryId'));
		const languageId = Number(form.get('languageId'));
		const verified = form.get('verified') === 'on';

		if (!name || !description || !githubUrl || !categoryId || !languageId) {
			return fail(400, {
				error: 'All fields are required.',
				name,
				description,
				githubUrl,
				categoryId,
				languageId,
				verified
			});
		}

		try {
			const created = await db.plugin.create({
				data: { name, description, githubUrl, categoryId, languageId, verified }
			});
			throw redirect(303, `/admin/plugins/${created.id}`);
		} catch (err) {
			if ((err as { status?: number }).status === 303) throw err;
			return fail(400, {
				error: 'A plugin with this name already exists in that category.',
				name,
				description,
				githubUrl,
				categoryId,
				languageId,
				verified
			});
		}
	}
};
