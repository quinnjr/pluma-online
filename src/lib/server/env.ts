import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

// ROOT_EMAIL: signup with this email becomes Role.Root automatically.
// JWT_SECRET: HS256 secret for signing auth JWTs.
const ROOT_EMAIL_RAW = env.ROOT_EMAIL?.trim().toLowerCase() ?? '';
const JWT_SECRET_RAW = env.JWT_SECRET ?? '';

export const ROOT_EMAIL = ROOT_EMAIL_RAW;

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
}

export function isRootEmail(email: string): boolean {
	return !!ROOT_EMAIL && email.trim().toLowerCase() === ROOT_EMAIL;
}
