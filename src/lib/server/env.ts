import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

// ROOT_EMAIL: the address of the auto-provisioned Root account.
// ROOT_PASSWORD: the Root account's initial password (forced to change on first
//   login — see src/lib/server/root-user.ts). Not normalized: passwords are
//   case-sensitive and may legitimately contain leading/trailing whitespace.
// JWT_SECRET: HS256 secret for signing auth JWTs.
const ROOT_EMAIL_RAW = env.ROOT_EMAIL?.trim().toLowerCase() ?? '';
const ROOT_PASSWORD_RAW = env.ROOT_PASSWORD ?? '';
const JWT_SECRET_RAW = env.JWT_SECRET ?? '';

export const ROOT_EMAIL = ROOT_EMAIL_RAW;

export const ROOT_PASSWORD = ROOT_PASSWORD_RAW;

export const JWT_SECRET = JWT_SECRET_RAW
	? new TextEncoder().encode(JWT_SECRET_RAW)
	: dev
		? new TextEncoder().encode('dev-insecure-jwt-secret-change-in-production')
		: null;

export function assertAuthConfig(): void {
	if (!JWT_SECRET) {
		throw new Error('JWT_SECRET is not configured. Refusing to start in non-dev without it.');
	}
	if (!ROOT_EMAIL) {
		// Not fatal — Root account simply won't be provisionable until set.
		console.warn('[auth] ROOT_EMAIL not set; signup will not produce a Root user.');
	}
	if (ROOT_EMAIL && !ROOT_PASSWORD) {
		// Not fatal — but the Root account can't be auto-provisioned without it.
		console.warn('[auth] ROOT_PASSWORD not set; Root account will not be auto-provisioned.');
	}
}

export function isRootEmail(email: string): boolean {
	return !!ROOT_EMAIL && email.trim().toLowerCase() === ROOT_EMAIL;
}
