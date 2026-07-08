// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ReadmeBody from './ReadmeBody.svelte';

describe('ReadmeBody', () => {
	it('renders the html when status=ok', () => {
		render(ReadmeBody, {
			props: {
				html: '<h1 data-testid="readme">From GitHub</h1>',
				status: 'ok',
				fallbackDescription: 'desc',
				githubUrl: 'https://github.com/o/r'
			}
		});
		expect(screen.getByTestId('readme')).toBeInTheDocument();
		expect(screen.queryByText(/unavailable/i)).toBeNull();
	});

	it('renders fallback notice + description when status=missing', () => {
		render(ReadmeBody, {
			props: {
				html: null,
				status: 'missing',
				fallbackDescription: 'A short plugin description.',
				githubUrl: 'https://github.com/o/r'
			}
		});
		expect(screen.getByText(/unavailable/i)).toBeInTheDocument();
		expect(screen.getByText('A short plugin description.')).toBeInTheDocument();
	});

	it('renders the rate-limit notice when status=rate_limited', () => {
		render(ReadmeBody, {
			props: {
				html: null,
				status: 'rate_limited',
				fallbackDescription: 'A short plugin description.',
				githubUrl: 'https://github.com/o/r'
			}
		});
		expect(screen.getByText(/rate limit reached/i)).toBeInTheDocument();
		expect(screen.getByText('A short plugin description.')).toBeInTheDocument();
	});
});
