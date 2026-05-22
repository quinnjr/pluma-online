import { describe, it, expect, vi } from 'vitest';

// Avoid pulling in Prisma's runtime through ./db.
vi.mock('./db', () => ({ db: {} }));

const { parseTransports, passkeyToAuthenticator, rpName, rpID, rpOrigin } = await import(
	'./webauthn'
);

describe('parseTransports', () => {
	it('parses a JSON array', () => {
		expect(parseTransports('["usb","nfc"]')).toEqual(['usb', 'nfc']);
	});

	it('returns [] for non-array JSON', () => {
		expect(parseTransports('{"x":1}')).toEqual([]);
		expect(parseTransports('"usb"')).toEqual([]);
	});

	it('returns [] for invalid JSON', () => {
		expect(parseTransports('not json')).toEqual([]);
		expect(parseTransports('')).toEqual([]);
	});
});

describe('passkeyToAuthenticator', () => {
	it('decodes publicKey from base64url and converts counter to Number', () => {
		const pk = Buffer.from([1, 2, 3, 4, 5]).toString('base64url');
		const auth = passkeyToAuthenticator({
			id: 'cred-id',
			publicKey: pk,
			counter: BigInt(42),
			transports: '["usb"]',
			userId: 1,
			createdAt: new Date(),
			lastUsedAt: null,
			label: null
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} as any);
		expect(auth.id).toBe('cred-id');
		expect(Buffer.isBuffer(auth.publicKey)).toBe(true);
		expect(Array.from(auth.publicKey)).toEqual([1, 2, 3, 4, 5]);
		expect(auth.counter).toBe(42);
		expect(typeof auth.counter).toBe('number');
		expect(auth.transports).toEqual(['usb']);
	});
});

describe('rp config', () => {
	it('derives rpID from ORIGIN', () => {
		expect(rpName()).toBe('PluMA Online');
		// ORIGIN is set to http://localhost:5173 in vitest.config.ts
		expect(rpID()).toBe('localhost');
		expect(rpOrigin()).toBe('http://localhost:5173');
	});
});
