import { error, fail, type Actions } from '@sveltejs/kit';
import { Role } from '@prisma/client';
import { db } from '$lib/server/db';
import { enforce, requireLogin } from '$lib/server/rbac';
import { subject } from '@casl/ability';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	requireLogin(locals.user);
	enforce(locals.ability, 'read', 'User');

	const users = await db.user.findMany({
		orderBy: [{ enabled: 'asc' }, { createdAt: 'desc' }],
		select: {
			id: true,
			email: true,
			displayName: true,
			institution: true,
			role: true,
			enabled: true,
			verifiedAt: true,
			verifiedBy: { select: { displayName: true, email: true } },
			createdAt: true
		}
	});

	return {
		users,
		currentUserId: locals.user.id
	};
};

async function loadTarget(id: number) {
	const target = await db.user.findUnique({ where: { id } });
	if (!target) throw error(404, 'User not found');
	return target;
}

export const actions: Actions = {
	verify: async ({ locals, request }) => {
		requireLogin(locals.user);
		const form = await request.formData();
		const id = Number(form.get('id'));
		const target = await loadTarget(id);

		if (!locals.ability.can('verify', subject('User', target))) {
			return fail(403, { error: 'You cannot verify this account.' });
		}
		if (target.enabled) return { ok: true, id };

		await db.user.update({
			where: { id },
			data: {
				enabled: true,
				verifiedAt: new Date(),
				verifiedById: locals.user.id,
				tokenVersion: { increment: 1 }
			}
		});
		return { ok: true, id, verified: true };
	},

	disable: async ({ locals, request }) => {
		requireLogin(locals.user);
		const form = await request.formData();
		const id = Number(form.get('id'));
		if (id === locals.user.id) return fail(400, { error: 'You cannot disable your own account.' });
		const target = await loadTarget(id);
		if (target.role === Role.Root) return fail(403, { error: 'Root accounts cannot be disabled.' });
		if (!locals.ability.can('verify', subject('User', target))) {
			return fail(403, { error: 'You cannot modify this account.' });
		}
		await db.user.update({
			where: { id },
			data: {
				enabled: false,
				tokenVersion: { increment: 1 }
			}
		});
		return { ok: true, id, disabled: true };
	},

	promote: async ({ locals, request }) => {
		requireLogin(locals.user);
		enforce(locals.ability, 'promote', 'User');
		const form = await request.formData();
		const id = Number(form.get('id'));
		const target = await loadTarget(id);
		if (target.role === Role.Root) return fail(400, { error: 'Target is already Root.' });
		await db.user.update({
			where: { id },
			data: {
				role: Role.Admin,
				enabled: true,
				verifiedAt: target.verifiedAt ?? new Date(),
				verifiedById: locals.user.id,
				tokenVersion: { increment: 1 }
			}
		});
		return { ok: true, id, promoted: true };
	},

	demote: async ({ locals, request }) => {
		requireLogin(locals.user);
		enforce(locals.ability, 'promote', 'User');
		const form = await request.formData();
		const id = Number(form.get('id'));
		const target = await loadTarget(id);
		if (target.role === Role.Root) return fail(403, { error: 'Root cannot be demoted.' });
		if (target.role !== Role.Admin) return fail(400, { error: 'Target is not an Admin.' });
		await db.user.update({
			where: { id },
			data: {
				role: Role.User,
				tokenVersion: { increment: 1 }
			}
		});
		return { ok: true, id, demoted: true };
	}
};
