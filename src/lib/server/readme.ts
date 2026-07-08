import sanitizeHtml from 'sanitize-html';
import { db } from './db';

export type GithubRepo = { owner: string; repo: string };

export type SanitizeCtx = {
	owner: string;
	repo: string;
	// null → drop relative URLs rather than guess.
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
				// Fragment-only links stay in-page; injecting target=_blank would
				// pop them into a new tab and lose the anchor scroll.
				if (href.startsWith('#')) return { tagName, attribs: { ...attribs, href } };
				return {
					tagName,
					attribs: { ...attribs, href, rel: 'noopener noreferrer', target: '_blank' }
				};
			},
			img: (tagName, attribs) => {
				const src = absolutize(attribs.src, ctx, 'raw');
				if (!src) return { tagName: 'span', attribs: {} };
				try {
					const host = new URL(src).hostname;
					if (host !== 'github.com' && !host.endsWith('.githubusercontent.com')) {
						return { tagName: 'span', attribs: {} };
					}
				} catch {
					return { tagName: 'span', attribs: {} };
				}
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
			headers: { ...GITHUB_HEADERS, Accept: 'application/vnd.github+json' },
			signal: AbortSignal.timeout(8000)
		});
		if (res.status !== 200) return null;
		const body = (await res.json()) as { default_branch?: string };
		const branch = body.default_branch;
		if (!branch) return null;
		// Git allows wild branch names; restrict to the safe subset so an
		// unusual branch can't inject path chars into the rewritten URLs.
		if (!/^[A-Za-z0-9._/-]+$/.test(branch) || branch.includes('..')) {
			console.warn('[readme] rejecting unusual default branch', { owner, repo, branch });
			return null;
		}
		return branch;
	} catch (err) {
		console.error('[readme] getDefaultBranch failed', { owner, repo, err });
		return null;
	}
}

export type ReadmeStatus = 'ok' | 'missing' | 'rate_limited' | 'error';

export interface ReadmeResult {
	html: string | null;
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
	if (!parsed) return { html: null, status: 'error' };

	const row = await db.readmeCache.findUnique({
		where: { ownerType_ownerId: { ownerType: args.ownerType, ownerId: args.ownerId } }
	});

	if (row && Date.now() - row.fetchedAt.getTime() < TTL_MS) {
		return rowToResult(row);
	}

	const refreshPromise = refresh(args.ownerType, args.ownerId, parsed, row);

	if (row) {
		const stale = rowToResult(row);
		// Make the refresh promise resolve to the stale fallback on any failure
		// so a mid-race upsert/DB error never propagates out of Promise.race.
		const raceableRefresh = refreshPromise.catch((err) => {
			console.error('[readme] background refresh failed', err);
			return stale;
		});
		let timer: ReturnType<typeof setTimeout> | undefined;
		const timeout = new Promise<ReadmeResult>((resolve) => {
			timer = setTimeout(() => resolve(stale), 2000);
		});
		return Promise.race([raceableRefresh, timeout]).finally(() => {
			if (timer) clearTimeout(timer);
		});
	}

	return refreshPromise;
}

function rowToResult(row: { html: string | null; lastStatus: number }): ReadmeResult {
	if (row.html) return { html: row.html, status: 'ok' };
	if (row.lastStatus === 404) return { html: null, status: 'missing' };
	if (row.lastStatus === 403) return { html: null, status: 'rate_limited' };
	// sanitization stripped everything — treat as missing, not a fetch error.
	if (row.lastStatus === 200) return { html: null, status: 'missing' };
	return { html: null, status: 'error' };
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

	const MAX_BYTES = 2 * 1024 * 1024;

	try {
		const res = await fetch(
			`https://api.github.com/repos/${repo.owner}/${repo.repo}/readme`,
			{ headers, signal: AbortSignal.timeout(8000) }
		);
		status = res.status;
		if (status === 200) {
			const contentLength = Number(res.headers.get('content-length') ?? 0);
			if (contentLength > MAX_BYTES) {
				status = 0;
				console.warn('[readme] response too large', { owner: repo.owner, repo: repo.repo, contentLength });
			} else {
				const raw = await res.text();
				if (raw.length > MAX_BYTES) {
					status = 0;
					console.warn('[readme] response body exceeded cap after read', { owner: repo.owner, repo: repo.repo, length: raw.length });
				} else {
					try {
						html = sanitizeReadmeHtml(raw, { owner: repo.owner, repo: repo.repo, defaultBranch });
					} catch (err) {
						console.error('[readme] sanitization failed', { owner: repo.owner, repo: repo.repo, err });
						html = undefined;
						status = 0;
					}
					if (html === '') html = undefined;
					etag = res.headers.get('ETag') ?? etag;
				}
			}
		}
	} catch (err) {
		status = 0;
		console.error('[readme] fetch failed', { owner: repo.owner, repo: repo.repo, err });
	}

	// Preserve prior html on 304/4xx/network errors so a transient blip doesn't blank the page.
	const update = {
		defaultBranch,
		lastStatus: status,
		fetchedAt: new Date(),
		...(status === 200 ? { html: html ?? null, etag } : {})
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
		// GitHub usernames/repos: alphanumerics, dot, underscore, hyphen.
		// Stricter than git allows, but matches what GitHub actually accepts.
		const safe = /^[A-Za-z0-9._-]+$/;
		if (!safe.test(owner) || !safe.test(repo)) return null;
		return { owner, repo };
	} catch {
		return null;
	}
}
