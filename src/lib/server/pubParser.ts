// Shared parser for publication form fields.
export type PubInput = {
	authors: string;
	year: number;
	title: string;
	venue: string;
	volume: number | null;
	issue: number | null;
	pages: string | null;
	doi: string | null;
	url: string | null;
};

export function parsePublicationForm(form: FormData): { ok: true; data: PubInput } | { ok: false; error: string } {
	const authors = String(form.get('authors') ?? '').trim();
	const year = Number(form.get('year'));
	const title = String(form.get('title') ?? '').trim();
	const venue = String(form.get('venue') ?? '').trim();
	const volumeRaw = String(form.get('volume') ?? '').trim();
	const issueRaw = String(form.get('issue') ?? '').trim();
	const pages = String(form.get('pages') ?? '').trim() || null;
	const doi = String(form.get('doi') ?? '').trim() || null;
	const url = String(form.get('url') ?? '').trim() || null;

	if (!authors || !title || !venue) return { ok: false, error: 'Authors, title, and venue are required.' };
	if (!Number.isFinite(year) || year < 1900 || year > 2100) return { ok: false, error: 'Enter a valid year.' };

	return {
		ok: true,
		data: {
			authors,
			year,
			title,
			venue,
			volume: volumeRaw ? Number(volumeRaw) : null,
			issue: issueRaw ? Number(issueRaw) : null,
			pages,
			doi,
			url
		}
	};
}
