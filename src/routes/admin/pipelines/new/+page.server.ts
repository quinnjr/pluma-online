import { fail, redirect, type Actions } from '@sveltejs/kit';
import { PipelineStatus } from '@prisma/client';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	enforce(locals.ability, 'create', 'Pipeline');
	return { statuses: Object.values(PipelineStatus) };
};

export const actions: Actions = {
	default: async ({ locals, request }) => {
		enforce(locals.ability, 'create', 'Pipeline');
		const form = await request.formData();
		const name = String(form.get('name') ?? '').trim();
		const description = String(form.get('description') ?? '').trim();
		const githubUrl = String(form.get('githubUrl') ?? '').trim();
		const status = String(form.get('status') ?? 'Completed') as PipelineStatus;
		if (!name || !description || !githubUrl) return fail(400, { error: 'All fields are required.', name, description, githubUrl, status });
		if (!(status in PipelineStatus)) return fail(400, { error: 'Invalid status.' });

		try {
			const created = await db.pipeline.create({ data: { name, description, githubUrl, status } });
			throw redirect(303, `/admin/pipelines/${created.id}`);
		} catch (err) {
			if ((err as { status?: number }).status === 303) throw err;
			return fail(400, { error: 'A pipeline with that name or GitHub URL already exists.', name, description, githubUrl, status });
		}
	}
};
