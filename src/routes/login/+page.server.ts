import { fail, redirect, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { verifyPassword } from '$lib/server/password';
import { issueAuthCookie } from '$lib/server/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (locals.user) throw redirect(303, url.searchParams.get('redirectTo') || '/');
	return {
		redirectTo: url.searchParams.get('redirectTo') ?? null
	};
};

export const actions: Actions = {
	default: async ({ cookies, request, url }) => {
		const form = await request.formData();
		const email = String(form.get('email') ?? '')
			.trim()
			.toLowerCase();
		const password = String(form.get('password') ?? '');
		const redirectTo = String(form.get('redirectTo') ?? '') || url.searchParams.get('redirectTo') || '/';

		if (!email || !password) {
			return fail(400, { email, error: 'Enter an email and password.' });
		}

		const user = await db.user.findUnique({ where: { email } });
		if (!user) {
			return fail(400, { email, error: 'Invalid email or password.' });
		}

		const ok = await verifyPassword(user.passwordHash, password);
		if (!ok) {
			return fail(400, { email, error: 'Invalid email or password.' });
		}

		if (!user.enabled) {
			return fail(403, {
				email,
				error:
					'Your account is pending verification by an administrator. Please try again once approved.'
			});
		}

		await issueAuthCookie(cookies, user);
		throw redirect(303, redirectTo);
	}
};
