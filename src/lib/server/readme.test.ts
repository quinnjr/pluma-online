import { describe, it, expect } from 'vitest';
import { parseGithubUrl } from './readme';

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
