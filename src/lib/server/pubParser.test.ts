import { describe, it, expect } from 'vitest';
import { parsePublicationForm } from './pubParser';

function fd(values: Record<string, string>): FormData {
	const f = new FormData();
	for (const [k, v] of Object.entries(values)) f.set(k, v);
	return f;
}

const valid = {
	authors: 'Smith J, Doe A',
	year: '2024',
	title: 'A study of plugins',
	venue: 'Bioinformatics'
};

describe('parsePublicationForm', () => {
	it('accepts a minimal valid form and trims strings', () => {
		const r = parsePublicationForm(fd({ ...valid, authors: '  Smith J  ' }));
		expect(r.ok).toBe(true);
		if (r.ok) {
			expect(r.data.authors).toBe('Smith J');
			expect(r.data.year).toBe(2024);
			expect(r.data.title).toBe('A study of plugins');
			expect(r.data.venue).toBe('Bioinformatics');
			expect(r.data.volume).toBeNull();
			expect(r.data.issue).toBeNull();
			expect(r.data.pages).toBeNull();
			expect(r.data.doi).toBeNull();
			expect(r.data.url).toBeNull();
		}
	});

	it('parses volume / issue as numbers and pages/doi/url as nullable strings', () => {
		const r = parsePublicationForm(
			fd({
				...valid,
				volume: '12',
				issue: '3',
				pages: '101-110',
				doi: '10.1/abc',
				url: 'https://example.com'
			})
		);
		expect(r.ok).toBe(true);
		if (r.ok) {
			expect(r.data.volume).toBe(12);
			expect(r.data.issue).toBe(3);
			expect(r.data.pages).toBe('101-110');
			expect(r.data.doi).toBe('10.1/abc');
			expect(r.data.url).toBe('https://example.com');
		}
	});

	it.each([
		[{ ...valid, authors: '' }, /Authors/],
		[{ ...valid, title: '' }, /title/],
		[{ ...valid, venue: '' }, /venue/]
	])('rejects when required field is missing (%#)', (input, pattern) => {
		const r = parsePublicationForm(fd(input));
		expect(r.ok).toBe(false);
		if (!r.ok) expect(r.error).toMatch(pattern);
	});

	it.each(['1899', '2101', 'banana', ''])('rejects invalid year %s', (year) => {
		const r = parsePublicationForm(fd({ ...valid, year }));
		expect(r.ok).toBe(false);
		if (!r.ok) expect(r.error).toMatch(/year/);
	});

	it('accepts boundary years 1900 and 2100', () => {
		expect(parsePublicationForm(fd({ ...valid, year: '1900' })).ok).toBe(true);
		expect(parsePublicationForm(fd({ ...valid, year: '2100' })).ok).toBe(true);
	});
});
