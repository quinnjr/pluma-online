import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword } from './password';

describe('password', () => {
	it('hashes to an argon2id PHC string', async () => {
		const hash = await hashPassword('hunter2!');
		expect(hash).toMatch(/^\$argon2id\$/);
	});

	it('verifies a correct password', async () => {
		const hash = await hashPassword('correct horse battery staple');
		await expect(verifyPassword(hash, 'correct horse battery staple')).resolves.toBe(true);
	});

	it('rejects an incorrect password', async () => {
		const hash = await hashPassword('hunter2!');
		await expect(verifyPassword(hash, 'hunter3!')).resolves.toBe(false);
	});

	it('produces a different hash each call (random salt)', async () => {
		const a = await hashPassword('same');
		const b = await hashPassword('same');
		expect(a).not.toBe(b);
		await expect(verifyPassword(a, 'same')).resolves.toBe(true);
		await expect(verifyPassword(b, 'same')).resolves.toBe(true);
	});

	it('handles unicode and long inputs', async () => {
		const pw = '🦀'.repeat(50) + ' ümlaut ' + 'a'.repeat(200);
		const hash = await hashPassword(pw);
		await expect(verifyPassword(hash, pw)).resolves.toBe(true);
		await expect(verifyPassword(hash, pw + 'x')).resolves.toBe(false);
	});
});
