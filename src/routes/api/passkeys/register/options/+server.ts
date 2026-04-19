import { json, error } from '@sveltejs/kit';
import { generateRegistrationOptions } from '@simplewebauthn/server';
import { rpName, rpID, createChallenge, getUserPasskeys, parseTransports } from '$lib/server/webauthn';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	if (!locals.user) throw error(401, 'Login required');

	const existingPasskeys = await getUserPasskeys(locals.user.id);
	const challenge = await createChallenge(locals.user.id);

	const options = await generateRegistrationOptions({
		rpName: rpName(),
		rpID: rpID(),
		userName: locals.user.email,
		userDisplayName: locals.user.displayName ?? locals.user.email,
		challenge: Buffer.from(challenge, 'base64url'),
		excludeCredentials: existingPasskeys.map((pk) => ({
			id: pk.id,
			transports: parseTransports(pk.transports)
		})),
		authenticatorSelection: {
			residentKey: 'preferred',
			userVerification: 'preferred'
		},
		attestationType: 'none'
	});

	return json(options);
};
