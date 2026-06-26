import { describe, it, expect, vi, beforeEach } from 'vitest';

const findUnique = vi.fn();
const create = vi.fn();

vi.mock('./db', () => ({
	db: {
		user: {
			findUnique: (...args: unknown[]) => findUnique(...args),
			create: (...args: unknown[]) => create(...args)
		}
	}
}));

// vitest.config.ts sets ROOT_EMAIL="root@pluma.local" and
// ROOT_PASSWORD="test-root-password-123" for the suite.
import { ensureRootUser } from './root-user';

describe('ensureRootUser', () => {
	beforeEach(() => {
		findUnique.mockReset();
		create.mockReset();
	});

	it('creates an enabled Root flagged mustChangePassword when none exists', async () => {
		findUnique.mockResolvedValue(null);
		create.mockResolvedValue({ id: 1 });

		await ensureRootUser();

		expect(findUnique).toHaveBeenCalledWith({ where: { email: 'root@pluma.local' } });
		expect(create).toHaveBeenCalledTimes(1);
		const { data } = create.mock.calls[0][0];
		expect(data.email).toBe('root@pluma.local');
		expect(data.role).toBe('Root');
		expect(data.enabled).toBe(true);
		expect(data.mustChangePassword).toBe(true);
		expect(data.verifiedAt).toBeInstanceOf(Date);
		// Password is argon2id-hashed, never stored in plaintext.
		expect(data.passwordHash).toMatch(/^\$argon2id\$/);
		expect(data.passwordHash).not.toContain('test-root-password-123');
	});

	it('is a no-op when the Root account already exists (never clobbers a rotated password)', async () => {
		findUnique.mockResolvedValue({ id: 1, email: 'root@pluma.local' });

		await ensureRootUser();

		expect(create).not.toHaveBeenCalled();
	});

	it('swallows a unique-constraint race (P2002) from a concurrent boot', async () => {
		findUnique.mockResolvedValue(null);
		create.mockRejectedValue({ code: 'P2002' });

		await expect(ensureRootUser()).resolves.toBeUndefined();
	});

	it('rethrows unexpected create errors', async () => {
		findUnique.mockResolvedValue(null);
		create.mockRejectedValue(new Error('connection refused'));

		await expect(ensureRootUser()).rejects.toThrow('connection refused');
	});
});
