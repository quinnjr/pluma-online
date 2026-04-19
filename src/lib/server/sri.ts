import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { building, dev } from '$app/environment';

type Manifest = Record<string, string>;

let manifest: Manifest | null = null;
let manifestHasEntries = false;

function loadManifest(): Manifest {
	if (manifest) return manifest;
	if (dev || building) return (manifest = {});
	const candidates = [
		join(process.cwd(), '.svelte-kit', 'output', 'server', 'sri-manifest.json'),
		join(process.cwd(), '.svelte-kit', 'output', 'client', 'sri-manifest.json'),
		join(process.cwd(), 'build', 'server', 'sri-manifest.json'),
		join(process.cwd(), 'build', 'client', 'sri-manifest.json')
	];
	for (const p of candidates) {
		try {
			manifest = JSON.parse(readFileSync(p, 'utf-8')) as Manifest;
			manifestHasEntries = Object.keys(manifest).length > 0;
			return manifest;
		} catch {
			// try next
		}
	}
	manifest = {};
	return manifest;
}

const TAG_RE =
	/<(script|link)\b([^>]*?)\b(src|href)="((?:\.?\/)?_app\/[^"]+)"([^>]*?)(\/?>)/g;

function normalizeUrl(url: string): string {
	if (url.startsWith('./')) return url.slice(1);
	if (url.startsWith('_app/')) return '/' + url;
	return url;
}

export function injectSri(html: string): string {
	loadManifest();
	if (!manifestHasEntries) return html;
	return html.replace(TAG_RE, (full, tag, before, attr, url, after, end) => {
		if (/\bintegrity=/.test(full)) return full;
		const key = normalizeUrl(url);
		const hash = manifest![key];
		if (!hash) return full;
		const needsCrossorigin = !/\bcrossorigin=/.test(full);
		const extra = needsCrossorigin
			? ` integrity="${hash}" crossorigin="anonymous"`
			: ` integrity="${hash}"`;
		return `<${tag}${before} ${attr}="${url}"${after}${extra}${end}`;
	});
}
