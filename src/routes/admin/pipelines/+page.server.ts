import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'read', 'Pipeline');
	const pipelines = await db.pipeline.findMany({
		orderBy: [{ status: 'asc' }, { name: 'asc' }],
		select: { id: true, name: true, description: true, status: true, githubUrl: true }
	});
	return { pipelines };
};

export const actions: Actions = {
	delete: async ({ locals, request }) => {
		enforce(locals.ability, 'delete', 'Pipeline');
		const id = Number((await request.formData()).get('id'));
		if (!Number.isFinite(id)) return fail(400, { error: 'Bad id' });
		await db.pipeline.delete({ where: { id } });
		return { ok: true };
	}
};
