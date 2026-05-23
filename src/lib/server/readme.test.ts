import { describe, it, expect } from 'vitest';
import { parseGithubUrl } from './readme';
import { sanitizeReadmeHtml } from './readme';

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
