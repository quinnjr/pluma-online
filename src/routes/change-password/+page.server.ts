import { fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { hashPassword, verifyPassword } from '$lib/server/password';
import { issueAuthCookie } from '$lib/server/auth';
import type { PageServerLoad } from './$types';

const MIN_LENGTH = 10;

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(303, '/login?redirectTo=' + encodeURIComponent('/change-password'));
	}
	return {
		email: locals.user.email,
		// When true the user was forced here and can't navigate away until done.
		forced: locals.user.mustChangePassword
	};
};

export const actions: Actions = {
	default: async ({ cookies, request, locals }) => {
		if (!locals.user) throw redirect(303, '/login');

		const form = await request.formData();
		const currentPassword = String(form.get('currentPassword') ?? '');
		const newPassword = String(form.get('newPassword') ?? '');
		const confirmPassword = String(form.get('confirmPassword') ?? '');

		if (!currentPassword || !newPassword) {
			return fail(400, { error: 'Enter your current password and a new password.' });
		}
		if (newPassword.length < MIN_LENGTH) {
			return fail(400, { error: `New password must be at least ${MIN_LENGTH} characters.` });
		}
		if (newPassword !== confirmPassword) {
			return fail(400, { error: 'New password and confirmation do not match.' });
		}

		// Re-load from the DB: locals.user carries no passwordHash guarantees and
		// we want the freshest record for the version bump.
		const user = await db.user.findUnique({ where: { id: locals.user.id } });
		if (!user) throw redirect(303, '/login');

		const currentOk = await verifyPassword(user.passwordHash, currentPassword);
		if (!currentOk) {
			return fail(400, { error: 'Your current password is incorrect.' });
		}

		const sameAsOld = await verifyPassword(user.passwordHash, newPassword);
		if (sameAsOld) {
			return fail(400, { error: 'New password must be different from your current password.' });
		}

		const passwordHash = await hashPassword(newPassword);
		const updated = await db.user.update({
			where: { id: user.id },
			data: {
				passwordHash,
				mustChangePassword: false,
				// Invalidate any other outstanding sessions for this account.
				tokenVersion: { increment: 1 }
			}
		});

		// Re-issue this session's cookie with the bumped tokenVersion so the user
		// who just changed their password isn't logged out on the next request.
		await issueAuthCookie(cookies, updated);

		throw redirect(303, '/');
	}
};
