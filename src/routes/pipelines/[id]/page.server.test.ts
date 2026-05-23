import { describe, it, expect, vi, beforeEach } from 'vitest';

const db = { pipeline: { findUnique: vi.fn() } };
const getReadme = vi.fn();

vi.mock('$lib/server/db', () => ({ db }));
vi.mock('$lib/server/readme', () => ({ getReadme }));

const { load } = await import('./+page.server');

function fakeEvent(id: string) {
	return { params: { id } } as Parameters<typeof load>[0];
}

beforeEach(() => {
	vi.clearAllMocks();
});

describe('pipelines/[id] load', () => {
	it('throws 400 on non-integer id', async () => {
		await expect(load(fakeEvent('abc'))).rejects.toMatchObject({ status: 400 });
	});

	it('throws 404 when the pipeline is missing', async () => {
		db.pipeline.findUnique.mockResolvedValueOnce(null);
		await expect(load(fakeEvent('7'))).rejects.toMatchObject({ status: 404 });
	});

	it('returns entity + readme on success and does not call recommendations', async () => {
		db.pipeline.findUnique.mockResolvedValueOnce({
			id: 7,
			name: 'Parkinsons',
			description: 'desc',
			githubUrl: 'https://github.com/o/p',
			status: 'Completed',
			rating: 0,
			author: null,
			createdAt: new Date('2026-01-01'),
			updatedAt: new Date('2026-02-01')
		});
		getReadme.mockResolvedValueOnce({ html: '<p>x</p>', status: 'ok' });

		const result = (await load(fakeEvent('7')))!;

		expect(result.entity.name).toBe('Parkinsons');
		expect(result.readmeStatus).toBe('ok');
		expect(getReadme).toHaveBeenCalledWith({
			ownerType: 'Pipeline',
			ownerId: 7,
			githubUrl: 'https://github.com/o/p'
		});
	});
});
