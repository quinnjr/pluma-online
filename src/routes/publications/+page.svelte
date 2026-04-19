<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const byYear = $derived.by(() => {
		const groups = new Map<number, typeof data.publications>();
		for (const p of data.publications) {
			if (!groups.has(p.year)) groups.set(p.year, []);
			groups.get(p.year)!.push(p);
		}
		return [...groups.entries()].sort((a, b) => b[0] - a[0]);
	});
</script>

<section class="border-b border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
			<i class="fas fa-book"></i> &nbsp;Publications
		</p>
		<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900 md:text-5xl">
			PluMA in the literature
		</h1>
		<p class="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
			Peer-reviewed publications describing PluMA and work from the BioRG group that depends on it.
		</p>
	</div>
</section>

<section class="mx-auto max-w-4xl px-6 py-16">
	{#each byYear as [year, items] (year)}
		<section class="mb-14">
			<h2
				class="mb-6 border-b border-ink-200 pb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500"
				data-ui
			>
				<span class="font-serif text-2xl text-primary-900">{year}</span>
			</h2>
			<ol class="space-y-8">
				{#each items as pub (pub.title)}
					<li>
						<p class="font-sans text-[11px] uppercase tracking-[0.14em] text-ink-500" data-ui>
							{pub.authors}
						</p>
						<h3 class="mt-1 font-serif text-lg font-semibold leading-snug text-primary-900">
							{pub.title}
						</h3>
						<p class="mt-1.5 font-serif italic text-ink-700">
							{pub.venue}{#if pub.volume}, <span class="not-italic">{pub.volume}({pub.issue})</span>{/if}{#if pub.pages}<span class="not-italic">, pp. {pub.pages}</span>{/if}.
						</p>
						{#if pub.doi || pub.url}
							<p class="mt-2 font-mono text-xs text-ink-500" data-ui>
								{#if pub.doi}
									DOI:
									<a
										href={pub.url || `https://doi.org/${pub.doi}`}
										target="_blank"
										rel="noopener"
										class="text-primary-700 hover:underline">{pub.doi}</a
									>
								{:else if pub.url}
									<a
										href={pub.url}
										target="_blank"
										rel="noopener"
										class="text-primary-700 hover:underline"
									>
										<i class="fas fa-arrow-up-right-from-square text-[10px]"></i> View online
									</a>
								{/if}
							</p>
						{/if}
					</li>
				{/each}
			</ol>
		</section>
	{/each}
</section>
