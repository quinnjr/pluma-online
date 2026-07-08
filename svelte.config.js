import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Node adapter — produces `build/` with a standalone server consumed by
		// the production Dockerfile. See https://svelte.dev/docs/kit/adapter-node.
		adapter: adapter({
			out: 'build',
			precompress: true,
			envPrefix: ''
		}),

		// Content Security Policy — SvelteKit injects nonces/hashes automatically for
		// its own inline scripts/styles, so we can keep directives strict.
		// See: https://svelte.dev/docs/kit/configuration#csp
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'base-uri': ['self'],
				'object-src': ['none'],
				'frame-ancestors': ['none'],
				'form-action': ['self'],
				'script-src': ['self'],
				// All stylesheets and fonts are self-hosted (Tailwind + Font Awesome +
				// @fontsource), so no third-party origins are permitted here.
				'style-src': ['self'],
				'style-src-elem': ['self'],
				'font-src': ['self'],
				// Images in README content are GitHub-hosted; restrict to those
				// origins rather than allowing all https sources.
				'img-src': ['self', 'data:', 'https://*.githubusercontent.com', 'https://github.com'],
				'connect-src': ['self'],
				'manifest-src': ['self'],
				'worker-src': ['self'],
				'media-src': ['self'],
				'upgrade-insecure-requests': true
			}
		}
	}
};

export default config;
