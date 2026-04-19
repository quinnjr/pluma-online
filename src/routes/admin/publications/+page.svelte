<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head><title>Publications · Admin</title></svelte:head>

<header class="mb-6 flex flex-wrap items-center justify-between gap-4">
	<div>
		<h1 class="font-serif text-3xl font-semibold text-primary-900">Publications</h1>
		<p class="mt-1 text-sm text-ink-500">{data.publications.length} total.</p>
	</div>
	<a href="/admin/publications/new" class="inline-flex items-center gap-2 rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-plus"></i> New publication</a>
</header>

<table class="w-full border-collapse text-sm">
	<thead>
		<tr class="border-b border-ink-200 text-left font-sans text-[11px] uppercase tracking-[0.12em] text-ink-500">
			<th class="py-2 pr-4">Title</th>
			<th class="py-2 pr-4">Year</th>
			<th class="py-2 pr-4">Venue</th>
			<th class="py-2 pr-4"></th>
		</tr>
	</thead>
	<tbody>
		{#each data.publications as p (p.id)}
			<tr class="border-b border-ink-100 align-top">
				<td class="py-2.5 pr-4">
					<a class="font-medium text-primary-900 hover:underline" href="/admin/publications/{p.id}">{p.title}</a>
					<p class="mt-0.5 text-xs text-ink-500">{p.authors}</p>
				</td>
				<td class="py-2.5 pr-4 text-ink-700">{p.year}</td>
				<td class="py-2.5 pr-4 italic text-ink-700">{p.venue}</td>
				<td class="py-2.5 pr-4 text-right">
					<div class="inline-flex gap-1.5">
						<a href="/admin/publications/{p.id}" class="rounded-sm border border-ink-300 bg-white px-2.5 py-1 text-[11px]"><i class="fas fa-pen"></i> Edit</a>
						<form method="POST" action="?/delete" use:enhance>
							<input type="hidden" name="id" value={p.id} />
							<button type="submit" aria-label="Delete" onclick={(e) => { if (!confirm('Delete ' + p.title + '?')) e.preventDefault(); }} class="rounded-sm border border-rose-300 bg-rose-50 px-2.5 py-1 text-[11px] text-rose-800 hover:border-rose-500"><i class="fas fa-trash"></i></button>
						</form>
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
