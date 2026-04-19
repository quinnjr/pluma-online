import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import { parsePersonForm } from '$lib/server/personParser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	enforce(locals.ability, 'read', 'Person');
	const person = await db.person.findUnique({ where: { id: Number(params.id) } });
	if (!person) throw error(404, 'Person not found');
	let links: { label: string; href: string }[] = [];
	try {
		const parsed = JSON.parse(person.linksJson);
		if (Array.isArray(parsed)) links = parsed;
	} catch {}
	return { person, links };
};

export const actions: Actions = {
	update: async ({ locals, request, params }) => {
		enforce(locals.ability, 'update', 'Person');
		const parsed = parsePersonForm(await request.formData());
		if (!parsed.ok) return fail(400, { error: parsed.error });
		try {
			await db.person.update({ where: { id: Number(params.id) }, data: parsed.data });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Update failed — name may conflict.' });
		}
	},
	delete: async ({ locals, params }) => {
		enforce(locals.ability, 'delete', 'Person');
		await db.person.delete({ where: { id: Number(params.id) } });
		throw redirect(303, '/admin/people');
	}
};
