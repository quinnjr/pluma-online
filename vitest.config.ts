import { defineConfig } from 'vitest/config';
// vite-plugin-svelte-4 is @sveltejs/vite-plugin-svelte@^4 aliased for Vite 5 (vitest's vite-node)
import { svelte } from 'vite-plugin-svelte-4';
import { svelteTesting } from '@testing-library/svelte/vite';

// Root Vite config consumed by `vite dev` / `vite build`. Vitest workspace
// configuration lives in vitest.workspace.ts, which defines the Node and
// jsdom projects independently.
export default defineConfig({
	plugins: [svelte(), svelteTesting()]
});
