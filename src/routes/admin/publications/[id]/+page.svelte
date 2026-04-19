<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData; form: ActionData } = $props();
	const p = $derived(data.publication);
</script>

<svelte:head><title>{data.publication.title} · Admin</title></svelte:head>

<header class="mb-6 flex flex-wrap items-start justify-between gap-4">
	<div>
		<a href="/admin/publications" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back</a>
		<h1 class="mt-2 font-serif text-2xl font-semibold text-primary-900">{p.title}</h1>
	</div>
	<form method="POST" action="?/delete" use:enhance onsubmit={(e) => { if (!confirm('Delete this publication?')) e.preventDefault(); }}>
		<button type="submit" class="rounded-sm border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-800 hover:border-rose-500"><i class="fas fa-trash"></i> Delete</button>
	</form>
</header>

<form method="POST" action="?/update" class="max-w-3xl space-y-5" use:enhance>
	{#if form?.error}<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}
	{#if form?.ok}<p class="rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800">Saved.</p>{/if}
	<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="authors">Authors</label><input id="authors" name="authors" required value={p.authors} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
	<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="title">Title</label><input id="title" name="title" required value={p.title} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
	<div class="grid gap-5 sm:grid-cols-4">
		<div class="sm:col-span-2"><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="venue">Venue</label><input id="venue" name="venue" required value={p.venue} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
		<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="year">Year</label><input id="year" name="year" type="number" required value={p.year} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
		<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="pages">Pages</label><input id="pages" name="pages" value={p.pages ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
	</div>
	<div class="grid gap-5 sm:grid-cols-4">
		<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="volume">Volume</label><input id="volume" name="volume" type="number" value={p.volume ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
		<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="issue">Issue</label><input id="issue" name="issue" type="number" value={p.issue ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" /></div>
		<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="doi">DOI</label><input id="doi" name="doi" value={p.doi ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" /></div>
		<div><label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="url">URL</label><input id="url" name="url" type="url" value={p.url ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" /></div>
	</div>
	<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Save changes</button>
</form>
