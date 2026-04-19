import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'read', 'Category');
	const categories = await db.category.findMany({
		orderBy: { name: 'asc' },
		select: { id: true, name: true, _count: { select: { plugins: true } } }
	});
	return { categories };
};

export const actions: Actions = {
	create: async ({ locals, request }) => {
		enforce(locals.ability, 'create', 'Category');
		const name = String((await request.formData()).get('name') ?? '').trim();
		if (!name) return fail(400, { error: 'Name required.' });
		try {
			await db.category.create({ data: { name } });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Category already exists.' });
		}
	},
	rename: async ({ locals, request }) => {
		enforce(locals.ability, 'update', 'Category');
		const form = await request.formData();
		const id = Number(form.get('id'));
		const name = String(form.get('name') ?? '').trim();
		if (!id || !name) return fail(400, { error: 'Id and name required.' });
		try {
			await db.category.update({ where: { id }, data: { name } });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Rename failed — name may conflict.' });
		}
	},
	delete: async ({ locals, request }) => {
		enforce(locals.ability, 'delete', 'Category');
		const id = Number((await request.formData()).get('id'));
		const used = await db.plugin.count({ where: { categoryId: id } });
		if (used > 0) return fail(400, { error: `Category is in use by ${used} plugin(s). Reassign first.` });
		await db.category.delete({ where: { id } });
		return { ok: true };
	}
};
