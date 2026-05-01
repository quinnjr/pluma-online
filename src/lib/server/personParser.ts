import { PersonKind } from '@prisma/client';

export type PersonInput = {
	name: string;
	role: string;
	kind: PersonKind;
	linksJson: string;
	sortOrder: number;
};

export function parsePersonForm(
	form: FormData
): { ok: true; data: PersonInput } | { ok: false; error: string } {
	const name = String(form.get('name') ?? '').trim();
	const role = String(form.get('role') ?? '').trim();
	const kindRaw = String(form.get('kind') ?? 'Contributor');
	const sortOrder = Number(form.get('sortOrder') ?? 100);

	if (!name || !role) return { ok: false, error: 'Name and role are required.' };
	if (!(kindRaw in PersonKind)) return { ok: false, error: 'Invalid person kind.' };

	// Links: pairs of labels[] + hrefs[]
	const labels = form.getAll('linkLabel').map((v) => String(v).trim());
	const hrefs = form.getAll('linkHref').map((v) => String(v).trim());
	const links: { label: string; href: string }[] = [];
	for (let i = 0; i < Math.max(labels.length, hrefs.length); i++) {
		if (labels[i] && hrefs[i]) links.push({ label: labels[i], href: hrefs[i] });
	}

	return {
		ok: true,
		data: {
			name,
			role,
			kind: kindRaw as PersonKind,
			linksJson: JSON.stringify(links),
			sortOrder: Number.isFinite(sortOrder) ? sortOrder : 100
		}
	};
}
