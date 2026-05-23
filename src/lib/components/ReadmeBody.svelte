<script lang="ts">
	import type { ReadmeStatus } from '$lib/server/readme';

	type Props = {
		html: string | null;
		status: ReadmeStatus;
		fallbackDescription: string;
		githubUrl: string;
	};

	let { html, status, fallbackDescription, githubUrl }: Props = $props();

	const notice = $derived.by(() => {
		if (status === 'ok') return null;
		if (status === 'missing') return 'No README found in the linked repository.';
		if (status === 'rate_limited') return 'GitHub rate limit reached. Showing the catalog description.';
		return 'Could not load README from GitHub. Showing the catalog description.';
	});
</script>

{#if status === 'ok' && html}
	<article class="prose-pluma">
		{@html html}
	</article>
{:else}
	<div class="rounded-sm border border-ink-200 bg-white p-6">
		<p class="font-sans text-xs uppercase tracking-[0.14em] text-ink-500" data-ui>README unavailable</p>
		<p class="mt-1 text-sm text-ink-700">{notice}</p>
		<p class="mt-4 text-[15px] leading-relaxed text-ink-700">{fallbackDescription}</p>
		<p class="mt-4 text-xs">
			<a href={githubUrl} target="_blank" rel="noopener noreferrer" class="text-primary-700 hover:underline">
				View source on GitHub
			</a>
		</p>
	</div>
{/if}
