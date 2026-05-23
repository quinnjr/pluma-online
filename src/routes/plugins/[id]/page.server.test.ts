import { describe, it, expect, vi, beforeEach } from 'vitest';

const db = { plugin: { findUnique: vi.fn() } };
const getReadme = vi.fn();
const recommendationsFor = vi.fn();

vi.mock('$lib/server/db', () => ({ db }));
vi.mock('$lib/server/readme', () => ({ getReadme }));
vi.mock('$lib/server/recommendations', () => ({ recommendationsFor }));

const { load } = await import('./+page.server');

function fakeEvent(id: string) {
	return { params: { id } } as Parameters<typeof load>[0];
}

beforeEach(() => {
	vi.clearAllMocks();
});

describe('plugins/[id] load', () => {
	it('throws 400 on non-integer id', async () => {
		await expect(load(fakeEvent('abc'))).rejects.toMatchObject({ status: 400 });
	});

	it('throws 404 when the plugin is missing', async () => {
		db.plugin.findUnique.mockResolvedValueOnce(null);
		await expect(load(fakeEvent('42'))).rejects.toMatchObject({ status: 404 });
	});

	it('returns entity + readme + recommendations on success', async () => {
		db.plugin.findUnique.mockResolvedValueOnce({
			id: 42,
			name: 'FASTQ2QZA',
			description: 'desc',
			githubUrl: 'https://github.com/o/r',
			rating: 5,
			category: { name: 'Microbiome' },
			language: { name: 'Python' },
			author: { displayName: 'Q' },
			createdAt: new Date('2026-01-01'),
			updatedAt: new Date('2026-02-01')
		});
		getReadme.mockResolvedValueOnce({ html: '<h1>X</h1>', status: 'ok' });
		recommendationsFor.mockResolvedValueOnce([
			{ pluginId: 7, name: 'Deblur', description: 'd', weight: 3 }
		]);

		const result = (await load(fakeEvent('42')))!;

		expect(result.entity.name).toBe('FASTQ2QZA');
		expect(result.readmeStatus).toBe('ok');
		expect(result.readmeHtml).toBe('<h1>X</h1>');
		expect(result.recommendations).toHaveLength(1);
		expect(getReadme).toHaveBeenCalledWith({
			ownerType: 'Plugin',
			ownerId: 42,
			githubUrl: 'https://github.com/o/r'
		});
		expect(recommendationsFor).toHaveBeenCalledWith(42, { direction: 'both', limit: 6 });
	});
});
