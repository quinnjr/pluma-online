import { Role } from '@prisma/client';
import { db } from './db';
import { hashPassword } from './password';
import { ROOT_EMAIL, ROOT_PASSWORD } from './env';

/**
 * Idempotently provision the Root account from ROOT_EMAIL + ROOT_PASSWORD so an
 * administrator can sign in on a fresh deployment without a manual signup.
 *
 * The account is created `enabled` (it may sign in immediately) and flagged
 * `mustChangePassword`, which forces a new password before it can do anything
 * else (see the guard in src/hooks.server.ts and the /change-password route).
 *
 * If a user with ROOT_EMAIL already exists this is a no-op — we never overwrite
 * a password the operator may already have rotated. Runs once at server start.
 */
export async function ensureRootUser(): Promise<void> {
	if (!ROOT_EMAIL || !ROOT_PASSWORD) {
		console.warn(
			'[auth] ROOT_EMAIL and ROOT_PASSWORD must both be set to auto-provision the Root account; skipping.'
		);
		return;
	}

	const existing = await db.user.findUnique({ where: { email: ROOT_EMAIL } });
	if (existing) return;

	const passwordHash = await hashPassword(ROOT_PASSWORD);

	try {
		await db.user.create({
			data: {
				email: ROOT_EMAIL,
				passwordHash,
				role: Role.Root,
				enabled: true,
				verifiedAt: new Date(),
				mustChangePassword: true
			}
		});
		console.warn(
			`[auth] Provisioned Root account <${ROOT_EMAIL}>; password change required on first login.`
		);
	} catch (err: unknown) {
		// P2002 = unique constraint violation: another booting instance won the
		// race and created the account first. Treat as already-provisioned.
		if (err && typeof err === 'object' && 'code' in err && err.code === 'P2002') return;
		throw err;
	}
}
