<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const plugins = $derived(data.plugins);
	const categories = $derived(data.categories);
	const languages = $derived(data.languages);

	let query = $state('');
	let selectedCategory = $state('All');
	let selectedLanguage = $state('All');
	let limit = $state(60);

	const filtered = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return plugins.filter((p) => {
			if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
			if (selectedLanguage !== 'All' && p.language !== selectedLanguage) return false;
			if (!q) return true;
			return (
				p.name.toLowerCase().includes(q) ||
				p.description.toLowerCase().includes(q) ||
				p.category.toLowerCase().includes(q)
			);
		});
	});

	function reset() {
		query = '';
		selectedCategory = 'All';
		selectedLanguage = 'All';
		limit = 60;
	}

	function languageBadge(lang: string): string {
		const l = lang.toLowerCase();
		if (l.includes('c++') || l === 'c') return 'bg-primary-50 text-primary-700';
		if (l.includes('python')) return 'bg-amber-50 text-amber-800';
		if (l.includes('r')) return 'bg-emerald-50 text-emerald-800';
		if (l.includes('perl')) return 'bg-purple-50 text-purple-800';
		if (l.includes('java')) return 'bg-rose-50 text-rose-800';
		return 'bg-ink-100 text-ink-700';
	}
</script>

<section class="border-b border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
			<i class="fas fa-puzzle-piece"></i> &nbsp;Plugin Catalog
		</p>
		<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900 md:text-5xl">
			Browse the PluMA plugin pool
		</h1>
		<p class="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
			{plugins.length.toLocaleString()} plugins across {categories.length} categories. Each plugin is
			a self-contained stage that can be dropped into a pipeline and composed with others — regardless
			of language or file format.
		</p>
	</div>
</section>

<section class="mx-auto max-w-6xl px-6 py-10">
	<div class="grid gap-8 lg:grid-cols-[260px_1fr]">
		<aside class="lg:sticky lg:top-6 lg:self-start" data-ui>
			<form class="space-y-6" onsubmit={(e) => e.preventDefault()}>
				<div>
					<label
						for="search"
						class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
						>Search</label
					>
					<div class="relative mt-2">
						<i
							class="fas fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-500"
						></i>
						<input
							id="search"
							type="search"
							bind:value={query}
							placeholder="Name, keyword, author…"
							class="w-full rounded-sm border border-ink-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-primary-700 focus:ring-primary-700"
						/>
					</div>
				</div>

				<div>
					<label
						for="language"
						class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
						>Language</label
					>
					<select
						id="language"
						bind:value={selectedLanguage}
						class="mt-2 w-full rounded-sm border-ink-300 bg-white text-sm focus:border-primary-700 focus:ring-primary-700"
					>
						<option value="All">All languages ({plugins.length})</option>
						{#each languages as lang (lang.name)}
							<option value={lang.name}>{lang.name} ({lang.count})</option>
						{/each}
					</select>
				</div>

				<div>
					<p class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
						Category
					</p>
					<ul class="mt-2 max-h-96 space-y-1 overflow-y-auto pr-1 text-sm">
						<li>
							<button
								type="button"
								class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left transition hover:bg-ink-100"
								class:bg-primary-50={selectedCategory === 'All'}
								class:text-primary-700={selectedCategory === 'All'}
								onclick={() => (selectedCategory = 'All')}
							>
								<span>All categories</span>
								<span class="text-xs text-ink-500">{plugins.length}</span>
							</button>
						</li>
						{#each categories as cat (cat.name)}
							<li>
								<button
									type="button"
									class="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left transition hover:bg-ink-100"
									class:bg-primary-50={selectedCategory === cat.name}
									class:text-primary-700={selectedCategory === cat.name}
									onclick={() => (selectedCategory = cat.name)}
								>
									<span>{cat.name}</span>
									<span class="text-xs text-ink-500">{cat.count}</span>
								</button>
							</li>
						{/each}
					</ul>
				</div>

				<button
					type="button"
					class="flex w-full items-center justify-center gap-2 rounded-sm border border-ink-300 py-2 text-sm font-medium text-ink-700 hover:border-primary-700 hover:text-primary-700"
					onclick={reset}
				>
					<i class="fas fa-rotate-left"></i> Reset filters
				</button>
			</form>
		</aside>

		<div>
			<div
				class="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-ink-200 pb-3"
				data-ui
			>
				<p class="text-sm text-ink-500">
					Showing <span class="font-semibold text-ink-900"
						>{Math.min(limit, filtered.length).toLocaleString()}</span
					>
					of
					<span class="font-semibold text-ink-900">{filtered.length.toLocaleString()}</span>
					matching plugins
				</p>
				{#if selectedCategory !== 'All' || selectedLanguage !== 'All' || query}
					<p class="text-xs text-ink-500">
						Filters:
						{#if query}<span class="mx-1 rounded-sm bg-ink-100 px-2 py-0.5">“{query}”</span>{/if}
						{#if selectedCategory !== 'All'}<span
								class="mx-1 rounded-sm bg-ink-100 px-2 py-0.5">{selectedCategory}</span
							>{/if}
						{#if selectedLanguage !== 'All'}<span class="mx-1 rounded-sm bg-ink-100 px-2 py-0.5"
								>{selectedLanguage}</span
							>{/if}
					</p>
				{/if}
			</div>

			{#if filtered.length === 0}
				<div class="rounded-sm border border-dashed border-ink-300 bg-white py-20 text-center">
					<i class="fas fa-inbox text-3xl text-ink-300"></i>
					<p class="mt-4 font-serif text-lg text-ink-700">No plugins match your filters.</p>
					<button class="mt-4 text-sm text-primary-700 hover:underline" onclick={reset} data-ui>
						Clear filters
					</button>
				</div>
			{:else}
				<ul class="divide-y divide-ink-200 border-y border-ink-200">
					{#each filtered.slice(0, limit) as plugin (plugin.name + plugin.category)}
						<li class="py-5">
							<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<a
									href={plugin.githubUrl}
									target="_blank"
									rel="noopener"
									class="font-serif text-lg font-semibold text-primary-900 hover:text-primary-700 hover:underline"
								>
									{plugin.name}
								</a>
								<span
									class="rounded-sm px-2 py-0.5 font-sans text-[11px] font-medium {languageBadge(
										plugin.language
									)}"
									data-ui
								>
									{plugin.language}
								</span>
								<span
									class="font-sans text-[11px] uppercase tracking-[0.12em] text-ink-500"
									data-ui
								>
									<i class="fas fa-folder-open"></i>
									{plugin.category}
								</span>
							</div>
							<p class="mt-1.5 text-[15px] leading-relaxed text-ink-700">
								{plugin.description || 'No description provided.'}
							</p>
							<a
								href={plugin.githubUrl}
								target="_blank"
								rel="noopener"
								class="mt-2 inline-flex items-center gap-1.5 font-sans text-xs text-ink-500 hover:text-primary-700"
								data-ui
							>
								<i class="fab fa-github"></i>
								<span class="font-mono">{plugin.githubUrl.replace('https://github.com/', '')}</span>
							</a>
						</li>
					{/each}
				</ul>

				{#if filtered.length > limit}
					<div class="mt-8 text-center" data-ui>
						<button
							class="inline-flex items-center gap-2 rounded-sm border border-ink-300 px-5 py-2 text-sm font-medium text-ink-700 hover:border-primary-700 hover:text-primary-700"
							onclick={() => (limit += 60)}
						>
							<i class="fas fa-plus"></i> Load {Math.min(60, filtered.length - limit)} more
						</button>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</section>
