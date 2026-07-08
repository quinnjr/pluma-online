// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import type { PageData } from './$types';
import Page from './+page.svelte';

// Layout parent fields (stats/currentUser/abilityRules) are irrelevant to
// the component under test; cast to satisfy svelte-check without importing
// the full layout fixture.
function pageData(overrides: object): PageData {
	return overrides as PageData;
}

const baseData = {
	entity: {
		id: 42,
		name: 'FASTQ2QZA',
		description: 'A plugin.',
		githubUrl: 'https://github.com/o/r',
		rating: 5,
		category: { name: 'Microbiome' },
		language: { name: 'Python' },
		author: { displayName: 'Q' },
		createdAt: new Date('2026-01-01'),
		updatedAt: new Date('2026-02-01')
	},
	recommendations: []
};

describe('/plugins/[id] page', () => {
	it('renders the README html when status=ok', () => {
		render(Page, {
			props: {
				data: pageData({
					...baseData,
					readmeHtml: '<h1 data-testid="readme-h">Hi</h1>',
					readmeStatus: 'ok'
				})
			}
		});
		expect(screen.getByTestId('readme-h')).toBeInTheDocument();
		expect(screen.getByText('FASTQ2QZA')).toBeInTheDocument();
	});

	it('renders the fallback when status=missing', () => {
		render(Page, {
			props: {
				data: pageData({
					...baseData,
					readmeHtml: null,
					readmeStatus: 'missing'
				})
			}
		});
		expect(screen.getByText(/unavailable/i)).toBeInTheDocument();
		expect(screen.getByText('A plugin.')).toBeInTheDocument();
	});
});
