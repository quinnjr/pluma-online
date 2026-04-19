import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { resolveCurrentUser } from '$lib/server/auth';
import { defineAbilityFor } from '$lib/abilities';
import { injectSri } from '$lib/server/sri';

const authHandle: Handle = async ({ event, resolve }) => {
	// Skip auth resolution for immutable asset requests.
	if (event.url.pathname.startsWith('/_app/')) {
		return resolve(event);
	}

	const user = await resolveCurrentUser(event.cookies);
	event.locals.user = user;
	event.locals.ability = defineAbilityFor(
		user ? { id: user.id, role: user.role, enabled: user.enabled } : null
	);

	if (event.url.pathname.startsWith('/admin')) {
		if (!user) {
			const redirectTo = event.url.pathname + event.url.search;
			throw redirect(303, `/login?redirectTo=${encodeURIComponent(redirectTo)}`);
		}
		const ability = event.locals.ability;
		const hasAdminAccess =
			ability.can('manage', 'Plugin') ||
			ability.can('manage', 'Pipeline') ||
			ability.can('manage', 'Publication') ||
			ability.can('manage', 'Person') ||
			ability.can('verify', 'User');
		if (!hasAdminAccess) throw redirect(303, '/');
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => injectSri(html)
	});
};

// Pre-computed once; not rebuilt per request.
const PERMISSIONS_POLICY = [
	'accelerometer=()',
	'autoplay=()',
	'browsing-topics=()',
	'camera=()',
	'display-capture=()',
	'encrypted-media=()',
	'fullscreen=(self)',
	'geolocation=()',
	'gyroscope=()',
	'interest-cohort=()',
	'magnetometer=()',
	'microphone=()',
	'midi=()',
	'payment=()',
	'picture-in-picture=()',
	// publickey-credentials-get must allow self for WebAuthn passkeys
	'publickey-credentials-get=(self)',
	'screen-wake-lock=()',
	'sync-xhr=()',
	'usb=()',
	'web-share=()',
	'xr-spatial-tracking=()'
].join(', ');

const securityHeadersHandle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const h = response.headers;

	h.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	h.set('X-Content-Type-Options', 'nosniff');
	h.set('X-Frame-Options', 'DENY');
	h.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	h.set('Permissions-Policy', PERMISSIONS_POLICY);
	h.set('Cross-Origin-Opener-Policy', 'same-origin');
	h.set('Cross-Origin-Resource-Policy', 'same-origin');
	h.set('Origin-Agent-Cluster', '?1');
	h.set('X-DNS-Prefetch-Control', 'off');
	h.set('X-Permitted-Cross-Domain-Policies', 'none');
	h.delete('X-Powered-By');
	h.delete('Server');

	return response;
};

export const handle = sequence(authHandle, securityHeadersHandle);
