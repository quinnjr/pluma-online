<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<svelte:head><title>Categories · Admin</title></svelte:head>

<header class="mb-6">
	<h1 class="font-serif text-3xl font-semibold text-primary-900">Categories</h1>
	<p class="mt-1 text-sm text-ink-500">Plugin categories. Deletion is blocked while plugins are still attached.</p>
</header>

{#if form?.error}<p class="mb-4 rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}

<form method="POST" action="?/create" class="mb-8 flex max-w-md gap-2" use:enhance>
	<input name="name" required placeholder="New category name" class="flex-1 rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	<button class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-plus"></i> Add</button>
</form>

<table class="w-full border-collapse text-sm">
	<thead>
		<tr class="border-b border-ink-200 text-left font-sans text-[11px] uppercase tracking-[0.12em] text-ink-500">
			<th class="py-2 pr-4">Name</th>
			<th class="py-2 pr-4">Plugins</th>
			<th class="py-2 pr-4"></th>
		</tr>
	</thead>
	<tbody>
		{#each data.categories as c (c.id)}
			<tr class="border-b border-ink-100">
				<td class="py-2.5 pr-4">
					<form method="POST" action="?/rename" class="flex gap-2" use:enhance>
						<input type="hidden" name="id" value={c.id} />
						<input name="name" value={c.name} class="flex-1 rounded-sm border border-ink-300 bg-white px-2.5 py-1 text-sm" />
						<button class="rounded-sm border border-ink-300 bg-white px-2.5 py-1 text-[11px] hover:border-primary-700">Rename</button>
					</form>
				</td>
				<td class="py-2.5 pr-4 text-ink-700">{c._count.plugins}</td>
				<td class="py-2.5 pr-4 text-right">
					<form method="POST" action="?/delete" use:enhance>
						<input type="hidden" name="id" value={c.id} />
						<button type="submit" aria-label="Delete" onclick={(e) => { if (!confirm('Delete category ' + c.name + '?')) e.preventDefault(); }} class="rounded-sm border border-rose-300 bg-rose-50 px-2.5 py-1 text-[11px] text-rose-800 hover:border-rose-500"><i class="fas fa-trash"></i></button>
					</form>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
