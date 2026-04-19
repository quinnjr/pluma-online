<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let query = $state('');
	let statusFilter = $state<'All' | 'Completed' | 'InProgress' | 'Future'>('All');

	const filtered = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return data.pipelines.filter((p) => {
			if (statusFilter !== 'All' && p.status !== statusFilter) return false;
			if (!q) return true;
			return (
				p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
			);
		});
	});

	const counts = $derived.by(() => {
		const c = { Completed: 0, InProgress: 0, Future: 0 } as Record<string, number>;
		for (const p of data.pipelines) c[p.status] = (c[p.status] ?? 0) + 1;
		return c;
	});

	const STATUS_LABELS: Record<string, string> = {
		Completed: 'Completed & Released',
		InProgress: 'In Progress',
		Future: 'Future'
	};

	function statusBadge(status: string): string {
		if (status === 'Completed') return 'bg-emerald-50 text-emerald-800 border-emerald-200';
		if (status === 'InProgress') return 'bg-amber-50 text-amber-800 border-amber-200';
		return 'bg-ink-100 text-ink-500 border-ink-200';
	}
</script>

<section class="border-b border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
			<i class="fas fa-diagram-project"></i> &nbsp;Pipeline Pool
		</p>
		<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900 md:text-5xl">
			Published PluMA pipelines
		</h1>
		<p class="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
			A curated collection of {data.pipelines.length.toLocaleString()} pipelines assembled from PluMA
			plugins, with peer-reviewed citations where applicable. Clone any pipeline from the
			<code class="rounded bg-ink-100 px-1.5 py-0.5 text-sm">pipelines/</code> directory of the PluMA source
			tree.
		</p>
	</div>
</section>

<section class="mx-auto max-w-5xl px-6 py-10">
	<div class="mb-8 flex flex-wrap items-center gap-3" data-ui>
		<div class="relative flex-1 min-w-[240px]">
			<i
				class="fas fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-500"
			></i>
			<input
				type="search"
				bind:value={query}
				placeholder="Search pipelines…"
				class="w-full rounded-sm border border-ink-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-primary-700 focus:ring-primary-700"
			/>
		</div>
		<div class="flex gap-2">
			{#each ['All', 'Completed', 'InProgress', 'Future'] as status (status)}
				<button
					type="button"
					class="rounded-sm border px-3 py-2 text-xs font-medium transition"
					class:border-primary-700={statusFilter === status}
					class:bg-primary-50={statusFilter === status}
					class:text-primary-700={statusFilter === status}
					class:border-ink-300={statusFilter !== status}
					class:text-ink-700={statusFilter !== status}
					onclick={() => (statusFilter = status as typeof statusFilter)}
				>
					{STATUS_LABELS[status] ?? 'All'}
					{#if status !== 'All'}<span class="ml-1 text-ink-500">({counts[status] ?? 0})</span>{/if}
				</button>
			{/each}
		</div>
	</div>

	{#if filtered.length === 0}
		<div class="rounded-sm border border-dashed border-ink-300 bg-white py-20 text-center">
			<i class="fas fa-inbox text-3xl text-ink-300"></i>
			<p class="mt-4 font-serif text-lg text-ink-700">No pipelines match your filters.</p>
		</div>
	{:else}
		<ul class="divide-y divide-ink-200 border-y border-ink-200">
			{#each filtered as pipeline (pipeline.name)}
				<li class="py-5">
					<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
						<a
							href={pipeline.githubUrl}
							target="_blank"
							rel="noopener"
							class="font-serif text-lg font-semibold text-primary-900 hover:text-primary-700 hover:underline"
						>
							{pipeline.name}
						</a>
						<span
							class="rounded-sm border px-2 py-0.5 font-sans text-[11px] font-medium {statusBadge(
								pipeline.status
							)}"
							data-ui
						>
							{STATUS_LABELS[pipeline.status] ?? pipeline.status}
						</span>
					</div>
					<p class="mt-1.5 text-[15px] leading-relaxed text-ink-700">
						{pipeline.description || 'No description provided.'}
					</p>
					<a
						href={pipeline.githubUrl}
						target="_blank"
						rel="noopener"
						class="mt-2 inline-flex items-center gap-1.5 font-sans text-xs text-ink-500 hover:text-primary-700"
						data-ui
					>
						<i class="fab fa-github"></i>
						<span class="font-mono">{pipeline.githubUrl.replace('https://github.com/', '')}</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	<p class="mt-10 text-xs leading-relaxed text-ink-500" data-ui>
		Have a new pipeline to contribute? Send your repository and description to the project manager at
		FIU BioRG — see the
		<a class="underline" href="https://biorg.cs.fiu.edu/pluma/" target="_blank" rel="noopener"
			>official site</a
		>
		for current contact information.
	</p>
</section>
