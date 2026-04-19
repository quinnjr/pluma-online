import type { Cookies } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { db } from './db';
import { signAuthToken, verifyAuthToken } from './jwt';

export const AUTH_COOKIE = 'auth_token';

const cookieOptions = {
	path: '/',
	httpOnly: true,
	secure: !dev,
	sameSite: 'lax' as const,
	maxAge: 60 * 60 * 24 * 30 // 30 days
};

export async function issueAuthCookie(
	cookies: Cookies,
	user: { id: number; email: string; role: 'Root' | 'Admin' | 'User' | 'Guest'; tokenVersion: number }
) {
	const token = await signAuthToken({
		userId: user.id,
		email: user.email,
		role: user.role,
		tokenVersion: user.tokenVersion
	});
	cookies.set(AUTH_COOKIE, token, cookieOptions);
}

export function clearAuthCookie(cookies: Cookies) {
	cookies.delete(AUTH_COOKIE, { path: '/' });
}

/**
 * Read the cookie, verify the JWT, load the fresh user record, and check that
 * the token's tokenVersion matches the DB (so admin-initiated invalidation
 * takes effect immediately) and that the account is still enabled.
 *
 * Returns the current User row, or null for any failure / missing cookie.
 */
export async function resolveCurrentUser(cookies: Cookies) {
	const token = cookies.get(AUTH_COOKIE);
	if (!token) return null;

	const claims = await verifyAuthToken(token);
	if (!claims) return null;

	const userId = Number(claims.sub);
	if (!Number.isFinite(userId)) return null;

	const user = await db.user.findUnique({ where: { id: userId } });
	if (!user) return null;
	if (!user.enabled) return null;
	if (user.tokenVersion !== claims.tv) return null;

	return user;
}
