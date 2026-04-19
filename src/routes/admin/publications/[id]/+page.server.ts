import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import { parsePublicationForm } from '$lib/server/pubParser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	enforce(locals.ability, 'read', 'Publication');
	const publication = await db.publication.findUnique({ where: { id: Number(params.id) } });
	if (!publication) throw error(404, 'Publication not found');
	return { publication };
};

export const actions: Actions = {
	update: async ({ locals, request, params }) => {
		enforce(locals.ability, 'update', 'Publication');
		const parsed = parsePublicationForm(await request.formData());
		if (!parsed.ok) return fail(400, { error: parsed.error });
		try {
			await db.publication.update({ where: { id: Number(params.id) }, data: parsed.data });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Update failed — title may conflict.' });
		}
	},
	delete: async ({ locals, params }) => {
		enforce(locals.ability, 'delete', 'Publication');
		await db.publication.delete({ where: { id: Number(params.id) } });
		throw redirect(303, '/admin/publications');
	}
};
