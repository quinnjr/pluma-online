import { describe, it, expect, vi, beforeEach } from 'vitest';

type CacheRow = {
	ownerType: 'Plugin' | 'Pipeline';
	ownerId: number;
	html: string | null;
	etag: string | null;
	defaultBranch: string | null;
	lastStatus: number;
	fetchedAt: Date;
	updatedAt: Date;
};

const state = vi.hoisted(() => ({ rows: [] as CacheRow[] }));

const db = vi.hoisted(() => ({
	readmeCache: {
		findUnique: vi.fn(async (args: { where: { ownerType_ownerId: { ownerType: 'Plugin' | 'Pipeline'; ownerId: number } } }) =>
			state.rows.find(
				(r) =>
					r.ownerType === args.where.ownerType_ownerId.ownerType &&
					r.ownerId === args.where.ownerType_ownerId.ownerId
			) ?? null
		),
		upsert: vi.fn(
			async (args: {
				where: { ownerType_ownerId: { ownerType: 'Plugin' | 'Pipeline'; ownerId: number } };
				create: Partial<CacheRow>;
				update: Partial<CacheRow>;
			}) => {
				const idx = state.rows.findIndex(
					(r) =>
						r.ownerType === args.where.ownerType_ownerId.ownerType &&
						r.ownerId === args.where.ownerType_ownerId.ownerId
				);
				if (idx === -1) {
					const row = {
						ownerType: args.where.ownerType_ownerId.ownerType,
						ownerId: args.where.ownerType_ownerId.ownerId,
						html: null,
						etag: null,
						defaultBranch: null,
						lastStatus: 0,
						fetchedAt: new Date(),
						updatedAt: new Date(),
						...args.create
					} as CacheRow;
					state.rows.push(row);
					return row;
				}
				state.rows[idx] = { ...state.rows[idx], ...args.update, updatedAt: new Date() };
				return state.rows[idx];
			}
		)
	}
}));

vi.mock('./db', () => ({ db }));

import { parseGithubUrl } from './readme';
import { sanitizeReadmeHtml } from './readme';
import { getDefaultBranch } from './readme';

const fetchMock = vi.fn();
beforeEach(() => {
	fetchMock.mockReset();
	state.rows = [];
	vi.stubGlobal('fetch', fetchMock);
});

describe('parseGithubUrl', () => {
	it('parses https://github.com/owner/repo', () => {
		expect(parseGithubUrl('https://github.com/owner/repo')).toEqual({
			owner: 'owner',
			repo: 'repo'
		});
	});

	it('parses with a trailing slash', () => {
		expect(parseGithubUrl('https://github.com/owner/repo/')).toEqual({
			owner: 'owner',
			repo: 'repo'
		});
	});

	it('parses with a .git suffix', () => {
		expect(parseGithubUrl('https://github.com/owner/repo.git')).toEqual({
			owner: 'owner',
			repo: 'repo'
		});
	});

	it('parses with extra path segments (e.g. /tree/main)', () => {
		expect(parseGithubUrl('https://github.com/owner/repo/tree/main')).toEqual({
			owner: 'owner',
			repo: 'repo'
		});
	});

	it('returns null for non-GitHub hosts', () => {
		expect(parseGithubUrl('https://gitlab.com/owner/repo')).toBeNull();
	});

	it('returns null for malformed URLs', () => {
		expect(parseGithubUrl('not a url')).toBeNull();
		expect(parseGithubUrl('https://github.com/onlyone')).toBeNull();
		expect(parseGithubUrl('')).toBeNull();
	});
});

describe('sanitizeReadmeHtml', () => {
	const ctx = { owner: 'biorg', repo: 'fastq2qza', defaultBranch: 'main' };

	it('keeps headings, paragraphs, lists, code blocks, and tables', () => {
		const out = sanitizeReadmeHtml(
			'<h1>T</h1><p>p</p><ul><li>l</li></ul><pre><code class="language-py">x</code></pre><table><tr><td>c</td></tr></table>',
			ctx
		);
		expect(out).toContain('<h1>T</h1>');
		expect(out).toContain('<p>p</p>');
		expect(out).toContain('<ul><li>l</li></ul>');
		expect(out).toContain('class="language-py"');
		expect(out).toContain('<table>');
	});

	it('drops <script> tags entirely', () => {
		const out = sanitizeReadmeHtml('<p>hi</p><script>alert(1)</script>', ctx);
		expect(out).not.toContain('script');
		expect(out).toContain('<p>hi</p>');
	});

	it('strips on* event handlers', () => {
		const out = sanitizeReadmeHtml('<a href="https://x" onclick="alert(1)">x</a>', ctx);
		expect(out).not.toContain('onclick');
	});

	it('drops javascript: URLs on anchors', () => {
		const out = sanitizeReadmeHtml('<a href="javascript:alert(1)">x</a>', ctx);
		expect(out).not.toContain('javascript:');
	});

	it('injects rel and target on every anchor', () => {
		const out = sanitizeReadmeHtml('<a href="https://x">x</a>', ctx);
		expect(out).toContain('rel="noopener noreferrer"');
		expect(out).toContain('target="_blank"');
	});

	it('rewrites relative <img src> to raw.githubusercontent.com on the default branch', () => {
		const out = sanitizeReadmeHtml('<img src="docs/foo.png">', ctx);
		expect(out).toContain('https://raw.githubusercontent.com/biorg/fastq2qza/main/docs/foo.png');
	});

	it('rewrites relative <a href> to github.com/.../blob on the default branch', () => {
		const out = sanitizeReadmeHtml('<a href="docs/bar.md">x</a>', ctx);
		expect(out).toContain('https://github.com/biorg/fastq2qza/blob/main/docs/bar.md');
	});

	it('drops a relative <img> when defaultBranch is null', () => {
		const out = sanitizeReadmeHtml('<img src="docs/foo.png">', {
			owner: 'a',
			repo: 'b',
			defaultBranch: null
		});
		expect(out).not.toContain('docs/foo.png');
	});
});

describe('getDefaultBranch', () => {
	it('returns default_branch from /repos/{owner}/{repo}', async () => {
		fetchMock.mockResolvedValueOnce(
			new Response(JSON.stringify({ default_branch: 'develop' }), { status: 200 })
		);
		expect(await getDefaultBranch('a', 'b')).toBe('develop');
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.github.com/repos/a/b',
			expect.objectContaining({
				headers: expect.objectContaining({ Accept: 'application/vnd.github+json' })
			})
		);
	});

	it('returns null on non-200', async () => {
		fetchMock.mockResolvedValueOnce(new Response('', { status: 404 }));
		expect(await getDefaultBranch('a', 'b')).toBeNull();
	});

	it('returns null on network error', async () => {
		fetchMock.mockRejectedValueOnce(new Error('boom'));
		expect(await getDefaultBranch('a', 'b')).toBeNull();
	});
});

import { getReadme } from './readme';

const ENTITY = { ownerType: 'Plugin' as const, ownerId: 1, githubUrl: 'https://github.com/o/r' };

function repoOk(branch = 'main') {
	return new Response(JSON.stringify({ default_branch: branch }), { status: 200 });
}

function readmeOk(html: string, etag = '"abc"') {
	return new Response(html, { status: 200, headers: { ETag: etag } });
}

// 304 is a null-body status the WHATWG Response constructor rejects, so stub
// the shape refresh() actually reads (status only on the non-200 path).
function notModified(): Response {
	return { status: 304, headers: { get: () => null }, text: async () => '' } as unknown as Response;
}

describe('getReadme — happy path', () => {
	it('cold cache: fetches repo metadata + readme html and stores both', async () => {
		fetchMock.mockResolvedValueOnce(repoOk('main')).mockResolvedValueOnce(readmeOk('<h1>Hi</h1>'));
		const result = await getReadme(ENTITY);
		expect(result.status).toBe('ok');
		expect(result.html).toContain('<h1>Hi</h1>');
		expect(state.rows).toHaveLength(1);
		expect(state.rows[0].defaultBranch).toBe('main');
		expect(state.rows[0].etag).toBe('"abc"');
		expect(state.rows[0].lastStatus).toBe(200);
	});

	it('warm cache (< TTL): returns stored html without any fetch', async () => {
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>cached</p>', etag: '"x"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: new Date(Date.now() - 1000), updatedAt: new Date()
		});
		const result = await getReadme(ENTITY);
		expect(result.status).toBe('ok');
		expect(result.html).toBe('<p>cached</p>');
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('returns status=error for a malformed githubUrl', async () => {
		const result = await getReadme({ ...ENTITY, githubUrl: 'not a url' });
		expect(result.status).toBe('error');
		expect(result.html).toBeUndefined();
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('maps a 200 with empty sanitized html to missing (not error)', async () => {
		fetchMock
			.mockResolvedValueOnce(repoOk('main'))
			.mockResolvedValueOnce(readmeOk('<script>only unsafe content</script>'));
		const result = await getReadme(ENTITY);
		expect(result.status).toBe('missing');
		expect(result.html).toBeUndefined();
	});

	it('stale cache (> TTL): re-fetches and refreshes stored html', async () => {
		const stale = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>old</p>', etag: '"e"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: stale, updatedAt: stale
		});
		fetchMock.mockResolvedValueOnce(readmeOk('<p>fresh</p>', '"e2"'));
		const result = await getReadme(ENTITY);
		expect(result.html).toContain('<p>fresh</p>');
		expect(state.rows[0].etag).toBe('"e2"');
		// defaultBranch already known → only the readme endpoint is hit, not /repos
		expect(fetchMock).toHaveBeenCalledTimes(1);
	});
});

describe('getReadme — ETag flow', () => {
	it('expired cache + 304 keeps html and etag, bumps fetchedAt', async () => {
		const oldFetchedAt = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>old</p>', etag: '"prev"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: oldFetchedAt, updatedAt: oldFetchedAt
		});

		fetchMock.mockResolvedValueOnce(notModified());

		const result = await getReadme(ENTITY);

		expect(result.status).toBe('ok');
		expect(result.html).toBe('<p>old</p>');
		expect(fetchMock).toHaveBeenCalledTimes(1);
		expect((fetchMock.mock.calls[0][1] as RequestInit).headers).toMatchObject({
			'If-None-Match': '"prev"'
		});
		expect(state.rows[0].fetchedAt.getTime()).toBeGreaterThan(oldFetchedAt.getTime());
		expect(state.rows[0].etag).toBe('"prev"');
	});

	it('expired cache + 200 replaces html and etag', async () => {
		const oldFetchedAt = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>old</p>', etag: '"prev"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: oldFetchedAt, updatedAt: oldFetchedAt
		});

		fetchMock.mockResolvedValueOnce(readmeOk('<p>new</p>', '"next"'));

		const result = await getReadme(ENTITY);

		expect(result.html).toContain('<p>new</p>');
		expect(state.rows[0].etag).toBe('"next"');
	});
});

describe('getReadme — fallback statuses', () => {
	it('404 with prior html preserves and still serves the stale html', async () => {
		const old = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>stale</p>', etag: '"x"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: old, updatedAt: old
		});
		fetchMock.mockResolvedValueOnce(new Response('', { status: 404 }));

		const result = await getReadme(ENTITY);

		expect(state.rows[0].html).toBe('<p>stale</p>');
		expect(result.status).toBe('ok');
		expect(result.html).toBe('<p>stale</p>');
		expect(state.rows[0].lastStatus).toBe(404);
	});

	it('404 with no prior row returns status=missing and html undefined', async () => {
		fetchMock
			.mockResolvedValueOnce(repoOk('main'))
			.mockResolvedValueOnce(new Response('', { status: 404 }));

		const result = await getReadme(ENTITY);

		expect(result.status).toBe('missing');
		expect(result.html).toBeUndefined();
	});

	it('403 returns rate_limited when no prior html exists', async () => {
		fetchMock
			.mockResolvedValueOnce(repoOk('main'))
			.mockResolvedValueOnce(new Response('', { status: 403 }));

		const result = await getReadme(ENTITY);

		expect(result.status).toBe('rate_limited');
	});

	it('network error returns stale html and records lastStatus 0', async () => {
		const old = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>stale</p>', etag: null,
			defaultBranch: 'main', lastStatus: 200, fetchedAt: old, updatedAt: old
		});
		fetchMock.mockRejectedValueOnce(new Error('boom'));

		const result = await getReadme(ENTITY);

		expect(result.html).toBe('<p>stale</p>');
		expect(state.rows[0].lastStatus).toBe(0);
	});
});

describe('getReadme — refresh timeout', () => {
	it('serves stale cache when GitHub takes longer than 2s', async () => {
		vi.useFakeTimers();
		const old = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>stale</p>', etag: '"x"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: old, updatedAt: old
		});

		fetchMock.mockImplementation(
			() => new Promise((resolve) => setTimeout(() => resolve(readmeOk('<p>new</p>')), 5000))
		);

		const pending = getReadme(ENTITY);
		await vi.advanceTimersByTimeAsync(2100);
		const result = await pending;

		expect(result.status).toBe('ok');
		expect(result.html).toBe('<p>stale</p>');

		vi.useRealTimers();
	});

	it('background refresh eventually writes the upsert after the timeout', async () => {
		vi.useFakeTimers();
		const old = new Date(Date.now() - 25 * 60 * 60 * 1000);
		state.rows.push({
			ownerType: 'Plugin', ownerId: 1, html: '<p>stale</p>', etag: '"x"',
			defaultBranch: 'main', lastStatus: 200, fetchedAt: old, updatedAt: old
		});

		fetchMock.mockImplementation(
			() => new Promise((resolve) => setTimeout(() => resolve(readmeOk('<p>fresh</p>', '"y"')), 5000))
		);

		const pending = getReadme(ENTITY);
		await vi.advanceTimersByTimeAsync(2100);
		const result = await pending;
		expect(result.html).toBe('<p>stale</p>');

		// Drive the timer past the 5s mock delay, then let the background
		// upsert flush its microtasks.
		await vi.advanceTimersByTimeAsync(4000);
		await vi.runAllTimersAsync();
		// Allow the chained .then() in refresh() to settle.
		await Promise.resolve();
		await Promise.resolve();

		expect(state.rows[0].html).toContain('<p>fresh</p>');
		expect(state.rows[0].etag).toBe('"y"');

		vi.useRealTimers();
	});
});
