import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'read', 'Person');
	const people = await db.person.findMany({ orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }] });
	return { people };
};

export const actions: Actions = {
	delete: async ({ locals, request }) => {
		enforce(locals.ability, 'delete', 'Person');
		const id = Number((await request.formData()).get('id'));
		if (!Number.isFinite(id)) return fail(400, { error: 'Bad id' });
		await db.person.delete({ where: { id } });
		return { ok: true };
	}
};
