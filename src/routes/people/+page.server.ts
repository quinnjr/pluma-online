import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

type PersonLink = { label: string; href: string };

export const load: PageServerLoad = async () => {
	const people = await db.person.findMany({
		orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }]
	});

	const shaped = people.map((p) => ({
		name: p.name,
		role: p.role,
		kind: p.kind,
		links: safeParseLinks(p.linksJson)
	}));

	return {
		faculty: shaped.filter((p) => p.kind === 'Faculty'),
		contributors: shaped.filter((p) => p.kind === 'Contributor'),
		students: shaped.filter((p) => p.kind === 'Student' || p.kind === 'Alumni')
	};
};

function safeParseLinks(raw: string): PersonLink[] {
	try {
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
