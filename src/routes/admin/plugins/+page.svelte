<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const pages = $derived(Math.ceil(data.total / data.take));
</script>

<svelte:head><title>Plugins · Admin · PluMA</title></svelte:head>

<header class="mb-6 flex flex-wrap items-center justify-between gap-4">
	<div>
		<h1 class="font-serif text-3xl font-semibold text-primary-900">Plugins</h1>
		<p class="mt-1 text-sm text-ink-500">{data.total.toLocaleString()} total — create, edit, or delete catalog entries.</p>
	</div>
	<a href="/admin/plugins/new" class="inline-flex items-center gap-2 rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900">
		<i class="fas fa-plus"></i> New plugin
	</a>
</header>

<form method="GET" class="mb-4 flex gap-2">
	<input
		type="search"
		name="q"
		value={data.q}
		placeholder="Search by name, description, or category…"
		class="flex-1 rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm"
	/>
	<button class="rounded-sm border border-ink-300 px-4 py-2 text-sm">Search</button>
</form>

<table class="w-full border-collapse text-sm">
	<thead>
		<tr class="border-b border-ink-200 text-left font-sans text-[11px] uppercase tracking-[0.12em] text-ink-500">
			<th class="py-2 pr-4">Name</th>
			<th class="py-2 pr-4">Category</th>
			<th class="py-2 pr-4">Language</th>
			<th class="py-2 pr-4">Verified</th>
			<th class="py-2 pr-4">Updated</th>
			<th class="py-2 pr-4"></th>
		</tr>
	</thead>
	<tbody>
		{#each data.plugins as p (p.id)}
			<tr class="border-b border-ink-100 align-top">
				<td class="py-2.5 pr-4">
					<a class="font-medium text-primary-900 hover:underline" href="/admin/plugins/{p.id}">{p.name}</a>
					<p class="mt-0.5 line-clamp-1 text-xs text-ink-500">{p.description}</p>
				</td>
				<td class="py-2.5 pr-4 text-ink-700">{p.category.name}</td>
				<td class="py-2.5 pr-4 text-ink-700">{p.language.name}</td>
				<td class="py-2.5 pr-4">
					{#if p.verified}<span class="rounded-sm bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-800">yes</span>
					{:else}<span class="rounded-sm bg-ink-100 px-2 py-0.5 text-[11px] text-ink-700">no</span>{/if}
				</td>
				<td class="py-2.5 pr-4 text-xs text-ink-500">{new Date(p.updatedAt).toLocaleDateString()}</td>
				<td class="py-2.5 pr-4 text-right">
					<div class="inline-flex gap-1.5">
						<a href="/admin/plugins/{p.id}" class="rounded-sm border border-ink-300 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-700 hover:border-primary-700"><i class="fas fa-pen"></i> Edit</a>
						<form method="POST" action="?/delete" use:enhance>
							<input type="hidden" name="id" value={p.id} />
							<button type="submit" aria-label="Delete" onclick={(e) => { if (!confirm('Delete ' + p.name + '?')) e.preventDefault(); }} class="rounded-sm border border-rose-300 bg-rose-50 px-2.5 py-1 text-[11px] font-medium text-rose-800 hover:border-rose-500"><i class="fas fa-trash"></i></button>
						</form>
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

{#if pages > 1}
	<nav class="mt-6 flex flex-wrap items-center justify-center gap-1 text-xs">
		{#each Array.from({ length: pages }, (_, i) => i + 1) as n (n)}
			<a
				href="?q={encodeURIComponent(data.q)}&page={n}"
				class="rounded-sm border px-2.5 py-1"
				class:border-primary-700={n === data.page}
				class:text-primary-700={n === data.page}
				class:bg-primary-50={n === data.page}
				class:border-ink-300={n !== data.page}
				class:text-ink-700={n !== data.page}>{n}</a
			>
		{/each}
	</nav>
{/if}
