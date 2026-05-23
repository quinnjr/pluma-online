import { describe, it, expect, vi, beforeEach } from 'vitest';

type Challenge = { challenge: string; userId: number | null; expiresAt: Date };

const state = { challenges: [] as Challenge[] };

class FakePrismaKnownError extends Error {
	code: string;
	constructor(code: string) {
		super(code);
		this.code = code;
	}
}

const db = {
	webAuthnChallenge: {
		delete: vi.fn(async (args: { where: { challenge: string } }) => {
			const idx = state.challenges.findIndex((c) => c.challenge === args.where.challenge);
			if (idx === -1) throw new FakePrismaKnownError('P2025');
			const [row] = state.challenges.splice(idx, 1);
			return row;
		})
	}
};

vi.mock('./db', () => ({ db }));
vi.mock('@prisma/client', () => ({
	Prisma: { PrismaClientKnownRequestError: FakePrismaKnownError }
}));

const { parseTransports, passkeyToAuthenticator, rpName, rpID, rpOrigin, consumeChallenge } =
	await import('./webauthn');

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

describe('consumeChallenge', () => {
	beforeEach(() => {
		state.challenges = [];
		vi.clearAllMocks();
	});

	const future = () => new Date(Date.now() + 60_000);
	const past = () => new Date(Date.now() - 60_000);

	it('returns true and deletes when challenge is valid', async () => {
		state.challenges.push({ challenge: 'c1', userId: null, expiresAt: future() });
		expect(await consumeChallenge('c1')).toBe(true);
		expect(state.challenges).toHaveLength(0);
	});

	it('returns false for an expired challenge', async () => {
		state.challenges.push({ challenge: 'c2', userId: null, expiresAt: past() });
		expect(await consumeChallenge('c2')).toBe(false);
	});

	it('returns false when userId is provided but does not match the stored user', async () => {
		state.challenges.push({ challenge: 'c3', userId: 1, expiresAt: future() });
		expect(await consumeChallenge('c3', 2)).toBe(false);
	});

	it('returns true when the stored user is null (anonymous challenge) regardless of userId', async () => {
		state.challenges.push({ challenge: 'c4', userId: null, expiresAt: future() });
		expect(await consumeChallenge('c4', 99)).toBe(true);
	});

	it('returns false (not throws) when the challenge is missing', async () => {
		expect(await consumeChallenge('nope')).toBe(false);
	});

	it('rethrows non-P2025 Prisma errors so transient failures do not silently look like misses', async () => {
		db.webAuthnChallenge.delete.mockImplementationOnce(async () => {
			throw new FakePrismaKnownError('P1001');
		});
		await expect(consumeChallenge('whatever')).rejects.toBeInstanceOf(FakePrismaKnownError);
	});
});
