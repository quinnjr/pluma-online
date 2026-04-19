import { json, error } from '@sveltejs/kit';
import { verifyAuthenticationResponse } from '@simplewebauthn/server';
import { rpID, rpOrigin, consumeChallenge, passkeyToAuthenticator } from '$lib/server/webauthn';
import { db } from '$lib/server/db';
import { issueAuthCookie } from '$lib/server/auth';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies, request }) => {
	const body = await request.json();

	const credentialId = body.id;
	if (!credentialId) throw error(400, 'Missing credential ID');

	const passkey = await db.passkey.findUnique({
		where: { id: credentialId },
		include: { user: true }
	});
	if (!passkey) throw error(400, 'Unknown credential');
	if (!passkey.user.enabled) throw error(403, 'Account disabled or pending verification');

	let verification;
	try {
		verification = await verifyAuthenticationResponse({
			response: body,
			expectedChallenge: async (challenge) => {
				return consumeChallenge(challenge);
			},
			expectedOrigin: rpOrigin(),
			expectedRPID: rpID(),
			credential: passkeyToAuthenticator(passkey)
		});
	} catch (e) {
		throw error(400, `Authentication failed: ${(e as Error).message}`);
	}

	if (!verification.verified) {
		throw error(400, 'Passkey authentication failed');
	}

	await db.passkey.update({
		where: { id: credentialId },
		data: { counter: BigInt(verification.authenticationInfo.newCounter) }
	});

	await issueAuthCookie(cookies, passkey.user);

	return json({
		verified: true,
		user: {
			id: passkey.user.id,
			email: passkey.user.email,
			displayName: passkey.user.displayName
		}
	});
};
