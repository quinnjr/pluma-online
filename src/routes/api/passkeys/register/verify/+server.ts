import { json, error } from '@sveltejs/kit';
import { verifyRegistrationResponse } from '@simplewebauthn/server';
import { rpID, rpOrigin, consumeChallenge } from '$lib/server/webauthn';
import { db } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals, request }) => {
	if (!locals.user) throw error(401, 'Login required');

	const body = await request.json();

	let verification;
	try {
		verification = await verifyRegistrationResponse({
			response: body,
			expectedChallenge: async (challenge) => {
				return consumeChallenge(challenge, locals.user!.id);
			},
			expectedOrigin: rpOrigin(),
			expectedRPID: rpID()
		});
	} catch (e) {
		throw error(400, `Verification failed: ${(e as Error).message}`);
	}

	if (!verification.verified || !verification.registrationInfo) {
		throw error(400, 'Registration verification failed');
	}

	const { credential, credentialDeviceType, credentialBackedUp } =
		verification.registrationInfo;

	const label =
		typeof body.label === 'string' && body.label.trim()
			? body.label.trim()
			: `Passkey ${new Date().toLocaleDateString()}`;

	await db.passkey.create({
		data: {
			id: credential.id,
			publicKey: Buffer.from(credential.publicKey).toString('base64url'),
			counter: BigInt(credential.counter),
			deviceType: credentialDeviceType,
			backedUp: credentialBackedUp,
			algorithm: -7,
			transports: JSON.stringify(body.response?.transports ?? []),
			label,
			userId: locals.user.id
		}
	});

	return json({ verified: true });
};
