import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

const stub = (p: string) => fileURLToPath(new URL(`./src/__test__/stubs/${p}`, import.meta.url));

export default defineConfig({
	resolve: {
		alias: {
			'$env/dynamic/private': stub('env-private.ts'),
			'$env/dynamic/public': stub('env-public.ts'),
			'$app/environment': stub('app-environment.ts'),
			$lib: fileURLToPath(new URL('./src/lib', import.meta.url))
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'node',
		env: {
			JWT_SECRET: 'test-secret-please-do-not-use-in-production-1234567890',
			ROOT_EMAIL: 'root@pluma.local',
			ORIGIN: 'http://localhost:5173',
			NODE_ENV: 'test'
		}
	}
});
