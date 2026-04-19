import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'read', 'Language');
	const languages = await db.language.findMany({
		orderBy: { name: 'asc' },
		select: { id: true, name: true, _count: { select: { plugins: true } } }
	});
	return { languages };
};

export const actions: Actions = {
	create: async ({ locals, request }) => {
		enforce(locals.ability, 'create', 'Language');
		const name = String((await request.formData()).get('name') ?? '').trim();
		if (!name) return fail(400, { error: 'Name required.' });
		try {
			await db.language.create({ data: { name } });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Language already exists.' });
		}
	},
	rename: async ({ locals, request }) => {
		enforce(locals.ability, 'update', 'Language');
		const form = await request.formData();
		const id = Number(form.get('id'));
		const name = String(form.get('name') ?? '').trim();
		if (!id || !name) return fail(400, { error: 'Id and name required.' });
		try {
			await db.language.update({ where: { id }, data: { name } });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Rename failed — name may conflict.' });
		}
	},
	delete: async ({ locals, request }) => {
		enforce(locals.ability, 'delete', 'Language');
		const id = Number((await request.formData()).get('id'));
		const used = await db.plugin.count({ where: { languageId: id } });
		if (used > 0) return fail(400, { error: `Language is in use by ${used} plugin(s). Reassign first.` });
		await db.language.delete({ where: { id } });
		return { ok: true };
	}
};
