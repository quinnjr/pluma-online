import { json } from '@sveltejs/kit';
import { generateAuthenticationOptions } from '@simplewebauthn/server';
import { rpID, createChallenge } from '$lib/server/webauthn';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
	const challenge = await createChallenge();

	const options = await generateAuthenticationOptions({
		rpID: rpID(),
		challenge: Buffer.from(challenge, 'base64url'),
		userVerification: 'preferred',
		// Empty allowCredentials → discoverable credential / resident key flow.
		allowCredentials: []
	});

	return json(options);
};
