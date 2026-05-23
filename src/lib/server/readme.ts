export type GithubRepo = { owner: string; repo: string };

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
