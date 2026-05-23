import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'read', 'Publication');
	const publications = await db.publication.findMany({
		orderBy: [{ year: 'desc' }, { title: 'asc' }],
		select: { id: true, title: true, authors: true, year: true, venue: true }
	});
	return { publications };
};

export const actions: Actions = {
	delete: async ({ locals, request }) => {
		enforce(locals.ability, 'delete', 'Publication');
		const id = Number((await request.formData()).get('id'));
		if (!Number.isFinite(id)) return fail(400, { error: 'Bad id' });
		await db.publication.delete({ where: { id } });
		return { ok: true };
	}
};
