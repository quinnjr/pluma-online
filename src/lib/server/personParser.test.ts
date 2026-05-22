import { describe, it, expect } from 'vitest';
import { parsePersonForm } from './personParser';

function fd(values: Record<string, string | string[]>): FormData {
	const f = new FormData();
	for (const [k, v] of Object.entries(values)) {
		if (Array.isArray(v)) v.forEach((item) => f.append(k, item));
		else f.set(k, v);
	}
	return f;
}

describe('parsePersonForm', () => {
	it('accepts a minimal valid form', () => {
		const r = parsePersonForm(fd({ name: 'Ada Lovelace', role: 'Mathematician' }));
		expect(r.ok).toBe(true);
		if (r.ok) {
			expect(r.data.name).toBe('Ada Lovelace');
			expect(r.data.role).toBe('Mathematician');
			expect(r.data.kind).toBe('Contributor');
			expect(r.data.linksJson).toBe('[]');
			expect(r.data.sortOrder).toBe(100);
		}
	});

	it.each([
		[{ role: 'X' }, /Name and role/],
		[{ name: 'X' }, /Name and role/]
	])('rejects missing required fields (%#)', (input, pattern) => {
		const r = parsePersonForm(fd(input as Record<string, string>));
		expect(r.ok).toBe(false);
		if (!r.ok) expect(r.error).toMatch(pattern);
	});

	it('rejects invalid kind', () => {
		const r = parsePersonForm(fd({ name: 'A', role: 'B', kind: 'Wizard' }));
		expect(r.ok).toBe(false);
		if (!r.ok) expect(r.error).toMatch(/kind/);
	});

	it('zips parallel linkLabel + linkHref arrays into JSON', () => {
		const r = parsePersonForm(
			fd({
				name: 'A',
				role: 'B',
				linkLabel: ['GitHub', 'ORCID'],
				linkHref: ['https://github.com/a', 'https://orcid.org/x']
			})
		);
		expect(r.ok).toBe(true);
		if (r.ok) {
			expect(JSON.parse(r.data.linksJson)).toEqual([
				{ label: 'GitHub', href: 'https://github.com/a' },
				{ label: 'ORCID', href: 'https://orcid.org/x' }
			]);
		}
	});

	it('drops links where either label or href is blank', () => {
		const r = parsePersonForm(
			fd({
				name: 'A',
				role: 'B',
				linkLabel: ['GitHub', '', 'Site'],
				linkHref: ['https://gh', 'https://only-href', '']
			})
		);
		expect(r.ok).toBe(true);
		if (r.ok) expect(JSON.parse(r.data.linksJson)).toEqual([{ label: 'GitHub', href: 'https://gh' }]);
	});

	it('falls back to default sortOrder when non-numeric', () => {
		const r = parsePersonForm(fd({ name: 'A', role: 'B', sortOrder: 'banana' }));
		expect(r.ok).toBe(true);
		if (r.ok) expect(r.data.sortOrder).toBe(100);
	});

	it('honors a numeric sortOrder', () => {
		const r = parsePersonForm(fd({ name: 'A', role: 'B', sortOrder: '5' }));
		expect(r.ok).toBe(true);
		if (r.ok) expect(r.data.sortOrder).toBe(5);
	});
});
