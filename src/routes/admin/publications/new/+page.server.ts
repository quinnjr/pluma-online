import { fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import { parsePublicationForm } from '$lib/server/pubParser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'create', 'Publication');
	return {};
};

export const actions: Actions = {
	default: async ({ locals, request }) => {
		enforce(locals.ability, 'create', 'Publication');
		const form = await request.formData();
		const parsed = parsePublicationForm(form);
		if (!parsed.ok) return fail(400, { error: parsed.error, values: Object.fromEntries(form) });
		try {
			const created = await db.publication.create({ data: parsed.data });
			throw redirect(303, `/admin/publications/${created.id}`);
		} catch (err) {
			if ((err as { status?: number }).status === 303) throw err;
			return fail(400, { error: 'A publication with that title already exists.', values: Object.fromEntries(form) });
		}
	}
};
