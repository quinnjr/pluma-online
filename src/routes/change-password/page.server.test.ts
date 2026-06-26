import { describe, it, expect, vi, beforeEach } from 'vitest';

const { findUnique, update } = vi.hoisted(() => ({ findUnique: vi.fn(), update: vi.fn() }));
vi.mock('$lib/server/db', () => ({ db: { user: { findUnique, update } } }));

const { verifyPassword, hashPassword } = vi.hoisted(() => ({
	verifyPassword: vi.fn(),
	hashPassword: vi.fn(async () => '$argon2id$v=19$newhash')
}));
vi.mock('$lib/server/password', () => ({ verifyPassword, hashPassword }));

const { issueAuthCookie } = vi.hoisted(() => ({ issueAuthCookie: vi.fn() }));
vi.mock('$lib/server/auth', () => ({ issueAuthCookie }));

import { actions } from './+page.server';

type ActionFail = { status: number; data: { error: string } };
type Fields = Record<string, string>;

function event(fields: Fields, user: { id: number } | null = { id: 1 }) {
	const fd = new FormData();
	for (const [k, v] of Object.entries(fields)) fd.set(k, v);
	return {
		request: new Request('http://localhost/change-password', { method: 'POST', body: fd }),
		cookies: { set: vi.fn(), delete: vi.fn(), get: vi.fn() },
		locals: { user }
	} as unknown as Parameters<typeof actions.default>[0];
}

const good = {
	currentPassword: 'temp-password-123',
	newPassword: 'brand-new-password',
	confirmPassword: 'brand-new-password'
};

describe('change-password default action', () => {
	beforeEach(() => {
		findUnique.mockReset();
		update.mockReset();
		verifyPassword.mockReset();
		issueAuthCookie.mockReset();
		hashPassword.mockClear();
	});

	it('rejects a short new password', async () => {
		const res = (await actions.default(
			event({ ...good, newPassword: 'short', confirmPassword: 'short' })
		)) as ActionFail;
		expect(res.status).toBe(400);
		expect(res.data.error).toMatch(/at least 10/);
		expect(update).not.toHaveBeenCalled();
	});

	it('rejects mismatched confirmation', async () => {
		const res = (await actions.default(
			event({ ...good, confirmPassword: 'different-password' })
		)) as ActionFail;
		expect(res.status).toBe(400);
		expect(res.data.error).toMatch(/do not match/);
	});

	it('rejects an incorrect current password', async () => {
		findUnique.mockResolvedValue({ id: 1, passwordHash: '$argon2id$old' });
		verifyPassword.mockResolvedValue(false);
		const res = (await actions.default(event(good))) as ActionFail;
		expect(res.status).toBe(400);
		expect(res.data.error).toMatch(/current password is incorrect/);
		expect(update).not.toHaveBeenCalled();
	});

	it('rejects reusing the current password', async () => {
		findUnique.mockResolvedValue({ id: 1, passwordHash: '$argon2id$old' });
		// current matches AND new matches → same password
		verifyPassword.mockResolvedValue(true);
		const res = (await actions.default(event(good))) as ActionFail;
		expect(res.status).toBe(400);
		expect(res.data.error).toMatch(/different from your current/);
		expect(update).not.toHaveBeenCalled();
	});

	it('updates the password, clears the flag, bumps tokenVersion, re-issues the cookie, and redirects', async () => {
		findUnique.mockResolvedValue({ id: 1, passwordHash: '$argon2id$old' });
		// current correct, new differs from current
		verifyPassword.mockImplementation(
			async (_hash: string, plain: string) => plain === good.currentPassword
		);
		update.mockResolvedValue({ id: 1, email: 'root@pluma.local', role: 'Root', tokenVersion: 1 });

		let thrown: unknown;
		try {
			await actions.default(event(good));
		} catch (e) {
			thrown = e;
		}

		expect(update).toHaveBeenCalledTimes(1);
		const { data } = update.mock.calls[0][0] as { data: Record<string, unknown> };
		expect(data.passwordHash).toBe('$argon2id$v=19$newhash');
		expect(data.mustChangePassword).toBe(false);
		expect(data.tokenVersion).toEqual({ increment: 1 });
		expect(issueAuthCookie).toHaveBeenCalledTimes(1);
		// Success path throws a 303 redirect to '/'.
		expect(thrown).toBeTruthy();
		expect((thrown as { status: number }).status).toBe(303);
		expect((thrown as { location: string }).location).toBe('/');
	});
});
