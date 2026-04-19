import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),

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
				// Portraits still come from biorg.cs.fiu.edu / a WordPress CDN. Allow
				// any https source for images, plus data: for favicons.
				'img-src': ['self', 'data:', 'https:'],
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
