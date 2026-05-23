import sanitizeHtml from 'sanitize-html';

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
