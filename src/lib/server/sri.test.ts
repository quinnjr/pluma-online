import { describe, it, expect } from 'vitest';
import { injectSri } from './sri';

// In dev mode (default for tests), loadManifest() short-circuits to an empty
// object and injectSri becomes a no-op. That's the only behavior reachable
// without an on-disk .svelte-kit/output build, and is the contract we need:
// dev / unbuilt environments must not crash and must leave HTML untouched.
describe('injectSri (dev fallback)', () => {
	it('returns HTML unchanged when no manifest entries are present', () => {
		const html = `<script src="/_app/immutable/entry.js"></script>`;
		expect(injectSri(html)).toBe(html);
	});

	it('does not break HTML lacking any _app/ refs', () => {
		const html = '<html><body><p>hello</p></body></html>';
		expect(injectSri(html)).toBe(html);
	});

	it('is idempotent', () => {
		const html = `<link rel="stylesheet" href="/_app/immutable/x.css"><script src="/_app/y.js"></script>`;
		expect(injectSri(injectSri(html))).toBe(html);
	});
});
