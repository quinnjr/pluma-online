import sanitizeHtml from 'sanitize-html';
import { db } from './db';

export type GithubRepo = { owner: string; repo: string };

export type SanitizeCtx = {
	owner: string;
	repo: string;
	// null when we haven't yet resolved the repo's default branch; relative
	// URLs are then dropped rather than guessed.
	defaultBranch: string | null;
};

const ALLOWED_TAGS = [
	'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
	'p', 'blockquote', 'ul', 'ol', 'li',
	'pre', 'code', 'em', 'strong', 'del',
	'hr', 'br', 'a', 'img',
	'table', 'thead', 'tbody', 'tr', 'th', 'td',
	'details', 'summary', 'span', 'div'
];

const ALLOWED_ATTRS: Record<string, string[]> = {
	a: ['href', 'title', 'rel', 'target'],
	img: ['src', 'alt', 'title', 'width', 'height'],
	code: ['class'],
	pre: ['class'],
	span: ['class'],
	'*': ['id']
};

export function sanitizeReadmeHtml(input: string, ctx: SanitizeCtx): string {
	return sanitizeHtml(input, {
		allowedTags: ALLOWED_TAGS,
		allowedAttributes: ALLOWED_ATTRS,
		allowedSchemes: ['http', 'https', 'mailto'],
		disallowedTagsMode: 'discard',
		transformTags: {
			a: (tagName, attribs) => {
				const href = absolutize(attribs.href, ctx, 'blob');
				if (!href) return { tagName, attribs: {} };
				return {
					tagName,
					attribs: { ...attribs, href, rel: 'noopener noreferrer', target: '_blank' }
				};
			},
			img: (tagName, attribs) => {
				const src = absolutize(attribs.src, ctx, 'raw');
				if (!src) return { tagName: 'span', attribs: {} };
				return { tagName, attribs: { ...attribs, src } };
			}
		}
	});
}

function absolutize(
	url: string | undefined,
	ctx: SanitizeCtx,
	kind: 'raw' | 'blob'
): string | null {
	if (!url) return null;
	if (/^(https?:|mailto:)/i.test(url)) return url;
	if (url.startsWith('#')) return url;
	// Reject any other scheme (javascript:, data:, vbscript:, etc.)
	if (/^[a-zA-Z][a-zA-Z0-9+\-.]*:/.test(url)) return null;
	if (!ctx.defaultBranch) return null;
	const path = url.replace(/^\.?\/+/, '');
	if (kind === 'raw') {
		return `https://raw.githubusercontent.com/${ctx.owner}/${ctx.repo}/${ctx.defaultBranch}/${path}`;
	}
	return `https://github.com/${ctx.owner}/${ctx.repo}/blob/${ctx.defaultBranch}/${path}`;
}

const GITHUB_HEADERS = {
	'X-GitHub-Api-Version': '2022-11-28',
	'User-Agent': 'pluma-online'
};

export async function getDefaultBranch(owner: string, repo: string): Promise<string | null> {
	try {
		const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
			headers: { ...GITHUB_HEADERS, Accept: 'application/vnd.github+json' }
		});
		if (res.status !== 200) return null;
		const body = (await res.json()) as { default_branch?: string };
		return body.default_branch ?? null;
	} catch {
		return null;
	}
}

export type ReadmeStatus = 'ok' | 'missing' | 'rate_limited' | 'error';

export interface ReadmeResult {
	html?: string;
	status: ReadmeStatus;
}

export interface GetReadmeArgs {
	ownerType: 'Plugin' | 'Pipeline';
	ownerId: number;
	githubUrl: string;
}

const TTL_MS = 24 * 60 * 60 * 1000;

export async function getReadme(args: GetReadmeArgs): Promise<ReadmeResult> {
	const parsed = parseGithubUrl(args.githubUrl);
	if (!parsed) return { status: 'error' };

	const row = await db.readmeCache.findUnique({
		where: { ownerType_ownerId: { ownerType: args.ownerType, ownerId: args.ownerId } }
	});

	if (row && Date.now() - row.fetchedAt.getTime() < TTL_MS) {
		return rowToResult(row);
	}

	const refreshPromise = refresh(args.ownerType, args.ownerId, parsed, row);

	// With a stale row to fall back on, race the refresh against a 2s budget so
	// a slow GitHub never blocks the page load. The refresh keeps running and
	// its result is still upserted on completion. Cold caches must wait — there's
	// nothing to serve in the meantime.
	if (row) {
		// Race against a 2s budget — slow GitHub never blocks the page.
		// The background refresh may settle long after; attach a catch so a
		// late rejection (DB error mid-upsert) doesn't become an unhandled
		// rejection in the runtime.
		refreshPromise.catch(() => {});
		const timeout = new Promise<ReadmeResult>((resolve) =>
			setTimeout(() => resolve(rowToResult(row)), 2000)
		);
		return Promise.race([refreshPromise, timeout]);
	}

	return refreshPromise;
}

function rowToResult(row: { html: string | null; lastStatus: number }): ReadmeResult {
	if (row.html) return { html: row.html, status: 'ok' };
	if (row.lastStatus === 404) return { status: 'missing' };
	if (row.lastStatus === 403) return { status: 'rate_limited' };
	// A 200 with no usable html means the README rendered empty after
	// sanitization — treat it as missing content, not a fetch failure.
	if (row.lastStatus === 200) return { status: 'missing' };
	return { status: 'error' };
}

async function refresh(
	ownerType: 'Plugin' | 'Pipeline',
	ownerId: number,
	repo: GithubRepo,
	prior: { defaultBranch: string | null; etag: string | null } | null
): Promise<ReadmeResult> {
	const defaultBranch = prior?.defaultBranch ?? (await getDefaultBranch(repo.owner, repo.repo));

	const headers: Record<string, string> = { ...GITHUB_HEADERS, Accept: 'application/vnd.github.html' };
	if (prior?.etag) headers['If-None-Match'] = prior.etag;

	let status = 0;
	let html: string | undefined;
	let etag: string | null = prior?.etag ?? null;

	try {
		const res = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}/readme`, { headers });
		status = res.status;
		if (status === 200) {
			const raw = await res.text();
			html = sanitizeReadmeHtml(raw, { owner: repo.owner, repo: repo.repo, defaultBranch });
			if (html === '') html = undefined;
			etag = res.headers.get('ETag') ?? etag;
		}
	} catch {
		status = 0;
	}

	// Only overwrite html/etag on a 200. On 304/4xx/network errors we keep the
	// prior row's content so a transient GitHub blip doesn't blank the page.
	const update = {
		defaultBranch,
		lastStatus: status,
		fetchedAt: new Date(),
		...(status === 200 && html !== undefined ? { html, etag } : {})
	};
	const created = {
		ownerType,
		ownerId,
		html: status === 200 ? html ?? null : null,
		etag: status === 200 ? etag : null,
		defaultBranch,
		lastStatus: status,
		fetchedAt: new Date()
	};

	const after = await db.readmeCache.upsert({
		where: { ownerType_ownerId: { ownerType, ownerId } },
		create: created,
		update
	});

	return rowToResult(after);
}

export function parseGithubUrl(url: string): GithubRepo | null {
	try {
		const u = new URL(url);
		if (u.hostname !== 'github.com' && u.hostname !== 'www.github.com') return null;
		const parts = u.pathname.replace(/^\/+|\/+$/g, '').split('/');
		if (parts.length < 2) return null;
		const owner = parts[0];
		const repo = parts[1].replace(/\.git$/, '');
		if (!owner || !repo) return null;
		return { owner, repo };
	} catch {
		return null;
	}
}
