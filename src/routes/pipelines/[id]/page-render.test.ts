// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';
import type { PageData } from './$types';

const baseData = {
	entity: {
		id: 7,
		name: 'Parkinsons',
		description: 'A pipeline.',
		githubUrl: 'https://github.com/o/p',
		status: 'Completed' as const,
		rating: 0,
		author: null,
		createdAt: new Date('2026-01-01'),
		updatedAt: new Date('2026-02-01')
	}
};

function pageData(extra: Record<string, unknown>): PageData {
	return { ...baseData, ...extra } as unknown as PageData;
}

describe('/pipelines/[id] page', () => {
	it('renders the README html when status=ok', () => {
		render(Page, {
			props: { data: pageData({ readmeHtml: '<p data-testid="readme-p">Hi</p>', readmeStatus: 'ok' }) }
		});
		expect(screen.getByTestId('readme-p')).toBeInTheDocument();
		expect(screen.getByText('Parkinsons')).toBeInTheDocument();
	});

	it('renders the fallback when status=error', () => {
		render(Page, {
			props: { data: pageData({ readmeHtml: null, readmeStatus: 'error' }) }
		});
		expect(screen.getByText(/Could not load README/i)).toBeInTheDocument();
		expect(screen.getByText('A pipeline.')).toBeInTheDocument();
	});
});
