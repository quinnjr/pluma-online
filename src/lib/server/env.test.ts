import { describe, it, expect } from 'vitest';
import { isRootEmail, ROOT_EMAIL, JWT_SECRET } from './env';

describe('env', () => {
	it('normalizes ROOT_EMAIL to lowercase + trimmed', () => {
		// vitest.config.ts sets ROOT_EMAIL="root@pluma.local"
		expect(ROOT_EMAIL).toBe('root@pluma.local');
	});

	it('isRootEmail matches case-insensitively after trim', () => {
		expect(isRootEmail('root@pluma.local')).toBe(true);
		expect(isRootEmail('ROOT@PLUMA.LOCAL')).toBe(true);
		expect(isRootEmail('  root@pluma.local  ')).toBe(true);
	});

	it('isRootEmail rejects non-matches', () => {
		expect(isRootEmail('user@pluma.local')).toBe(false);
		expect(isRootEmail('')).toBe(false);
	});

	it('JWT_SECRET is set as a Uint8Array', () => {
		expect(JWT_SECRET).toBeInstanceOf(Uint8Array);
		expect(JWT_SECRET!.byteLength).toBeGreaterThanOrEqual(32);
	});
});
