import { fail, redirect, type Actions } from '@sveltejs/kit';
import { Role } from '@prisma/client';
import { db } from '$lib/server/db';
import { hashPassword } from '$lib/server/password';
import { issueAuthCookie } from '$lib/server/auth';
import { isRootEmail } from '$lib/server/env';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(303, '/');
	return {};
};

function validate(email: string, displayName: string, password: string) {
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
		return 'Enter a valid email address.';
	if (!displayName || displayName.length < 2)
		return 'Display name must be at least 2 characters.';
	if (password.length < 10)
		return 'Password must be at least 10 characters.';
	return null;
}

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const form = await request.formData();
		const email = String(form.get('email') ?? '')
			.trim()
			.toLowerCase();
		const displayName = String(form.get('displayName') ?? '').trim();
		const password = String(form.get('password') ?? '');
		const institution = String(form.get('institution') ?? '').trim() || null;

		const err = validate(email, displayName, password);
		if (err) return fail(400, { email, displayName, institution, error: err });

		const existing = await db.user.findFirst({
			where: { OR: [{ email }, { displayName }] }
		});
		if (existing) {
			return fail(400, {
				email,
				displayName,
				institution,
				error:
					existing.email === email
						? 'An account with this email already exists.'
						: 'That display name is already taken.'
			});
		}

		const isRoot = isRootEmail(email);
		const passwordHash = await hashPassword(password);

		const user = await db.user.create({
			data: {
				email,
				displayName,
				institution,
				passwordHash,
				role: isRoot ? Role.Root : Role.User,
				enabled: isRoot, // Root is auto-verified; all others wait for admin approval.
				verifiedAt: isRoot ? new Date() : null
			}
		});

		if (isRoot) {
			await issueAuthCookie(cookies, user);
			throw redirect(303, '/admin');
		}

		return {
			pending: true,
			email,
			displayName
		};
	}
};
