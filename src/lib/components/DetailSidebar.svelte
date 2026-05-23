<script lang="ts">
	import type { Recommendation } from '$lib/server/recommendations';

	type Meta = { label: string; value: string };
	type Props = {
		meta: Meta[];
		kind: 'plugin' | 'pipeline';
		recommendations?: Recommendation[];
	};
	let { meta, kind, recommendations = [] }: Props = $props();
</script>

<aside class="space-y-6 md:sticky md:top-24">
	<section class="rounded-sm border border-ink-200 bg-white p-5">
		<h2 class="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500" data-ui>Details</h2>
		<dl class="mt-3 space-y-2 text-sm">
			{#each meta as m (m.label)}
				<div class="flex justify-between gap-3">
					<dt class="text-ink-500">{m.label}</dt>
					<dd class="text-right text-ink-800">{m.value}</dd>
				</div>
			{/each}
		</dl>
	</section>

	{#if kind === 'plugin' && recommendations.length > 0}
		<section class="rounded-sm border border-ink-200 bg-white p-5">
			<h2 class="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500" data-ui>Used with</h2>
			<ul class="mt-3 flex flex-wrap gap-2">
				{#each recommendations as r (r.pluginId)}
					<li>
						<a class="inline-flex items-center rounded-sm border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs text-ink-700 hover:border-primary-700 hover:text-primary-700" href="/plugins/{r.pluginId}">
							{r.name}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</aside>
