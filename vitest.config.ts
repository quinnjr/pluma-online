import { defineConfig } from 'vitest/config';
// vite-plugin-svelte-4 is @sveltejs/vite-plugin-svelte@^4 aliased for Vite 5 (vitest's vite-node)
import { svelte } from 'vite-plugin-svelte-4';
import { svelteTesting } from '@testing-library/svelte/vite';
import { fileURLToPath } from 'node:url';

const stub = (p: string) => fileURLToPath(new URL(`./src/__test__/stubs/${p}`, import.meta.url));

const sharedAliases = {
	'$env/dynamic/private': stub('env-private.ts'),
	'$env/dynamic/public': stub('env-public.ts'),
	'$app/environment': stub('app-environment.ts'),
	$lib: fileURLToPath(new URL('./src/lib', import.meta.url))
};

const sharedEnv = {
	JWT_SECRET: 'test-secret-please-do-not-use-in-production-1234567890',
	ROOT_EMAIL: 'root@pluma.local',
	ORIGIN: 'http://localhost:5173',
	NODE_ENV: 'test'
};

export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	resolve: { alias: sharedAliases },
	test: {
		env: sharedEnv,
		setupFiles: ['src/__test__/jsdom-setup.ts'],
		projects: [
			{
				extends: true,
				test: {
					name: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: [
						'src/**/*.svelte.{test,spec}.{js,ts}',
						'src/**/*-render.{test,spec}.{js,ts}'
					],
					environment: 'node'
				}
			},
			{
				extends: true,
				test: {
					name: 'jsdom',
					include: [
						'src/**/*.svelte.{test,spec}.{js,ts}',
						'src/**/*-render.{test,spec}.{js,ts}'
					],
					environment: 'jsdom',
					setupFiles: ['src/__test__/jsdom-setup.ts']
				}
			}
		]
	}
});
