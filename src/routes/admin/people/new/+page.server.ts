import { fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import { parsePersonForm } from '$lib/server/personParser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'create', 'Person');
	return {};
};

export const actions: Actions = {
	default: async ({ locals, request }) => {
		enforce(locals.ability, 'create', 'Person');
		const parsed = parsePersonForm(await request.formData());
		if (!parsed.ok) return fail(400, { error: parsed.error });
		try {
			const created = await db.person.create({ data: parsed.data });
			throw redirect(303, `/admin/people/${created.id}`);
		} catch (err) {
			if ((err as { status?: number }).status === 303) throw err;
			return fail(400, { error: 'A person with that name already exists.' });
		}
	}
};
