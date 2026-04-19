import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

/**
 * Build-time SRI manifest for SvelteKit.
 *
 * SvelteKit injects <link>/<script> tags for its chunks during SSR, so
 * conventional Vite-level SRI plugins (which rewrite build-time HTML) can't
 * reach them. This plugin runs once at the end of the build, walks the client
 * output, and records a SHA-384 for every .js/.css file. The server-side hook
 * (src/lib/server/sri.ts) reads this manifest at startup and injects
 * `integrity` + `crossorigin` attributes via transformPageChunk.
 */
function sriManifest(): Plugin {
	let isSsr = false;
	return {
		name: 'pluma-sri-manifest',
		apply: 'build',
		enforce: 'post',
		configResolved(cfg) {
			isSsr = !!cfg.build.ssr;
		},
		closeBundle() {
			// Run once, in the final (server) build. Client runs first, so by the
			// time the server build closes, client assets exist on disk.
			if (!isSsr) return;
			const clientDir = join(process.cwd(), '.svelte-kit', 'output', 'client');
			const serverDir = join(process.cwd(), '.svelte-kit', 'output', 'server');
			if (!existsSync(clientDir) || !existsSync(serverDir)) return;

			const manifest: Record<string, string> = {};
			const walk = (dir: string) => {
				for (const name of readdirSync(dir)) {
					const full = join(dir, name);
					const st = statSync(full);
					if (st.isDirectory()) {
						walk(full);
						continue;
					}
					if (!/\.(js|css)$/.test(name)) continue;
					const rel = '/' + relative(clientDir, full).split(sep).join('/');
					const hash = createHash('sha384').update(readFileSync(full)).digest('base64');
					manifest[rel] = `sha384-${hash}`;
				}
			};
			walk(clientDir);

			// Ship the manifest inside BOTH client and server outputs so the server
			// can read it regardless of adapter packaging choices.
			const json = JSON.stringify(manifest, null, 2);
			writeFileSync(join(clientDir, 'sri-manifest.json'), json);
			writeFileSync(join(serverDir, 'sri-manifest.json'), json);
		}
	};
}

export default defineConfig({ plugins: [tailwindcss(), sveltekit(), sriManifest()] });
