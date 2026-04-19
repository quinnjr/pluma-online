import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { PipelineStatus } from '@prisma/client';
import { db } from '$lib/server/db';
import { enforce } from '$lib/server/rbac';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	enforce(locals.ability, 'read', 'Pipeline');
	const pipeline = await db.pipeline.findUnique({ where: { id: Number(params.id) } });
	if (!pipeline) throw error(404, 'Pipeline not found');
	return { pipeline, statuses: Object.values(PipelineStatus) };
};

export const actions: Actions = {
	update: async ({ locals, request, params }) => {
		enforce(locals.ability, 'update', 'Pipeline');
		const form = await request.formData();
		const data = {
			name: String(form.get('name') ?? '').trim(),
			description: String(form.get('description') ?? '').trim(),
			githubUrl: String(form.get('githubUrl') ?? '').trim(),
			status: String(form.get('status') ?? 'Completed') as PipelineStatus
		};
		if (!data.name || !data.description || !data.githubUrl) return fail(400, { error: 'All fields are required.' });
		try {
			await db.pipeline.update({ where: { id: Number(params.id) }, data });
			return { ok: true };
		} catch {
			return fail(400, { error: 'Update failed — name or URL may conflict.' });
		}
	},
	delete: async ({ locals, params }) => {
		enforce(locals.ability, 'delete', 'Pipeline');
		await db.pipeline.delete({ where: { id: Number(params.id) } });
		throw redirect(303, '/admin/pipelines');
	}
};
