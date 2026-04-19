import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	enforce(locals.ability, 'read', 'Plugin');
	const id = Number(params.id);
	const [plugin, categories, languages] = await Promise.all([
		db.plugin.findUnique({ where: { id } }),
		db.category.findMany({ orderBy: { name: 'asc' } }),
		db.language.findMany({ orderBy: { name: 'asc' } })
	]);
	if (!plugin) throw error(404, 'Plugin not found');
	return { plugin, categories, languages };
};

export const actions: Actions = {
	update: async ({ locals, request, params }) => {
		enforce(locals.ability, 'update', 'Plugin');
		const id = Number(params.id);
		const form = await request.formData();
		const data = {
			name: String(form.get('name') ?? '').trim(),
			description: String(form.get('description') ?? '').trim(),
			githubUrl: String(form.get('githubUrl') ?? '').trim(),
			categoryId: Number(form.get('categoryId')),
			languageId: Number(form.get('languageId')),
			verified: form.get('verified') === 'on'
		};
		if (!data.name || !data.description || !data.githubUrl || !data.categoryId || !data.languageId) {
			return fail(400, { error: 'All fields are required.' });
		}
		try {
			await db.plugin.update({ where: { id }, data });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Update failed — name may conflict within category.' });
		}
	},
	delete: async ({ locals, params }) => {
		enforce(locals.ability, 'delete', 'Plugin');
		await db.plugin.delete({ where: { id: Number(params.id) } });
		throw redirect(303, '/admin/plugins');
	}
};
