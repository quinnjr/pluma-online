import { db } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const prerender = false;

type Changefreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface UrlEntry {
	path: string;
	lastmod: Date | null;
	changefreq: Changefreq;
	priority: number;
}

const XML_ESCAPES: Record<string, string> = {
	'<': '&lt;',
	'>': '&gt;',
	'&': '&amp;',
	"'": '&apos;',
	'"': '&quot;'
};

function escapeXml(s: string): string {
	return s.replace(/[<>&'"]/g, (c) => XML_ESCAPES[c]);
}

export const GET: RequestHandler = async ({ url, setHeaders }) => {
	const origin = url.origin;

	const select = { updatedAt: true } as const;
	const orderBy = { updatedAt: 'desc' } as const;

	const [person, pipeline, plugin, publication] = await Promise.all([
		db.person.findFirst({ orderBy, select }),
		db.pipeline.findFirst({ orderBy, select }),
		db.plugin.findFirst({ orderBy, select }),
		db.publication.findFirst({ orderBy, select })
	]);

	const entries: UrlEntry[] = [
		{ path: '/', lastmod: null, changefreq: 'weekly', priority: 1.0 },
		{ path: '/getting-started', lastmod: null, changefreq: 'monthly', priority: 0.7 },
		{ path: '/people', lastmod: person?.updatedAt ?? null, changefreq: 'weekly', priority: 0.8 },
		{ path: '/pipelines', lastmod: pipeline?.updatedAt ?? null, changefreq: 'weekly', priority: 0.8 },
		{ path: '/plugins', lastmod: plugin?.updatedAt ?? null, changefreq: 'weekly', priority: 0.8 },
		{
			path: '/publications',
			lastmod: publication?.updatedAt ?? null,
			changefreq: 'weekly',
			priority: 0.8
		}
	];

	const lines: string[] = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
	];

	for (const { path, lastmod, changefreq, priority } of entries) {
		lines.push('  <url>');
		lines.push(`    <loc>${escapeXml(`${origin}${path}`)}</loc>`);
		if (lastmod) {
			lines.push(`    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>`);
		}
		lines.push(`    <changefreq>${changefreq}</changefreq>`);
		lines.push(`    <priority>${priority.toFixed(1)}</priority>`);
		lines.push('  </url>');
	}

	lines.push('</urlset>');

	setHeaders({
		'Content-Type': 'application/xml; charset=utf-8',
		'Cache-Control': 'public, max-age=3600'
	});

	return new Response(lines.join('\n') + '\n');
};
