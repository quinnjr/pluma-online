import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { dev } from '$app/environment';
import { db } from './db';
import { Prisma, type Passkey } from '@prisma/client';
import type { AuthenticatorTransportFuture } from '@simplewebauthn/server';

function getRpConfig() {
	const origin = publicEnv.PUBLIC_ORIGIN ?? env.ORIGIN ?? (dev ? 'http://localhost:5173' : '');
	const url = new URL(origin);
	return { rpName: 'PluMA Online', rpID: url.hostname, origin };
}

let _rpConfig: ReturnType<typeof getRpConfig> | null = null;
function rpConfig() {
	return (_rpConfig ??= getRpConfig());
}

export function rpName() {
	return rpConfig().rpName;
}
export function rpID() {
	return rpConfig().rpID;
}
export function rpOrigin() {
	return rpConfig().origin;
}

export function parseTransports(raw: string): AuthenticatorTransportFuture[] {
	try {
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

const CHALLENGE_TTL_MS = 5 * 60 * 1000;

export async function createChallenge(userId?: number): Promise<string> {
	await db.webAuthnChallenge.deleteMany({ where: { expiresAt: { lt: new Date() } } });

	const buf = new Uint8Array(32);
	crypto.getRandomValues(buf);
	const challenge = Buffer.from(buf).toString('base64url');

	await db.webAuthnChallenge.create({
		data: {
			challenge,
			userId: userId ?? null,
			expiresAt: new Date(Date.now() + CHALLENGE_TTL_MS)
		}
	});
	return challenge;
}

export async function consumeChallenge(challenge: string, userId?: number): Promise<boolean> {
	// Atomic delete-and-validate avoids the findUnique+delete race. P2025
	// (record not found) is the legitimate "already consumed or never existed"
	// case; any other error is operational and must propagate so transient DB
	// failures don't masquerade as challenge mismatches and lock users out.
	try {
		const row = await db.webAuthnChallenge.delete({ where: { challenge } });
		if (row.expiresAt < new Date()) return false;
		if (userId !== undefined && row.userId !== null && row.userId !== userId) return false;
		return true;
	} catch (err) {
		if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') return false;
		throw err;
	}
}

export function passkeyToAuthenticator(passkey: Passkey) {
	return {
		id: passkey.id,
		publicKey: Buffer.from(passkey.publicKey, 'base64url'),
		counter: Number(passkey.counter),
		transports: parseTransports(passkey.transports)
	};
}

export async function getUserPasskeys(userId: number) {
	return db.passkey.findMany({ where: { userId } });
}
