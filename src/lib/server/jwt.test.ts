import { describe, it, expect } from 'vitest';
import { signAuthToken, verifyAuthToken } from './jwt';

const baseClaims = {
	userId: 42,
	email: 'alice@example.com',
	role: 'Admin' as const,
	tokenVersion: 7
};

describe('jwt', () => {
	it('round-trips claims through sign + verify', async () => {
		const token = await signAuthToken(baseClaims);
		const claims = await verifyAuthToken(token);
		expect(claims).not.toBeNull();
		expect(claims!.sub).toBe('42');
		expect(claims!.email).toBe('alice@example.com');
		expect(claims!.role).toBe('Admin');
		expect(claims!.tv).toBe(7);
	});

	it('issues a token with the expected protected header', async () => {
		const token = await signAuthToken(baseClaims);
		const [headerB64] = token.split('.');
		const header = JSON.parse(Buffer.from(headerB64, 'base64url').toString('utf-8'));
		expect(header.alg).toBe('HS256');
	});

	it('sets issuer, audience, iat, and exp', async () => {
		const token = await signAuthToken(baseClaims);
		const claims = await verifyAuthToken(token);
		expect(claims!.iss).toBe('pluma-online');
		expect(claims!.aud).toBe('pluma-online-web');
		expect(typeof claims!.iat).toBe('number');
		expect(typeof claims!.exp).toBe('number');
		expect(claims!.exp! > claims!.iat!).toBe(true);
	});

	it('returns null for tampered tokens', async () => {
		const token = await signAuthToken(baseClaims);
		const tampered = token.slice(0, -4) + 'AAAA';
		expect(await verifyAuthToken(tampered)).toBeNull();
	});

	it('returns null for total garbage', async () => {
		expect(await verifyAuthToken('not-a-jwt')).toBeNull();
		expect(await verifyAuthToken('')).toBeNull();
	});

	it('returns null when audience does not match', async () => {
		// Sign manually with wrong audience by re-implementing the relevant bits.
		const { SignJWT } = await import('jose');
		const secret = new TextEncoder().encode(
			'test-secret-please-do-not-use-in-production-1234567890'
		);
		const bad = await new SignJWT({ role: 'Admin', tv: 1, email: 'x@y' })
			.setProtectedHeader({ alg: 'HS256' })
			.setSubject('1')
			.setIssuer('pluma-online')
			.setAudience('something-else')
			.setIssuedAt()
			.setExpirationTime('1h')
			.sign(secret);
		expect(await verifyAuthToken(bad)).toBeNull();
	});

	it('produces distinct tokens for distinct token versions', async () => {
		const a = await signAuthToken({ ...baseClaims, tokenVersion: 1 });
		const b = await signAuthToken({ ...baseClaims, tokenVersion: 2 });
		expect(a).not.toBe(b);
	});
});
