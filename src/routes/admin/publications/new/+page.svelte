<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	let { form }: { form: ActionData } = $props();
	const v = $derived((form?.values ?? {}) as Record<string, string>);
</script>

<svelte:head><title>New publication · Admin</title></svelte:head>

<header class="mb-6">
	<a href="/admin/publications" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back</a>
	<h1 class="mt-2 font-serif text-3xl font-semibold text-primary-900">New publication</h1>
</header>

<form method="POST" class="max-w-3xl space-y-5" use:enhance>
	{#if form?.error}<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="authors">Authors</label>
		<input id="authors" name="authors" required value={v.authors ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	</div>
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="title">Title</label>
		<input id="title" name="title" required value={v.title ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	</div>
	<div class="grid gap-5 sm:grid-cols-4">
		<div class="sm:col-span-2">
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="venue">Venue</label>
			<input id="venue" name="venue" required value={v.venue ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
		</div>
		<div>
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="year">Year</label>
			<input id="year" name="year" type="number" required value={v.year ?? new Date().getFullYear()} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
		</div>
		<div>
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="pages">Pages</label>
			<input id="pages" name="pages" value={v.pages ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
		</div>
	</div>
	<div class="grid gap-5 sm:grid-cols-4">
		<div>
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="volume">Volume</label>
			<input id="volume" name="volume" type="number" value={v.volume ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
		</div>
		<div>
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="issue">Issue</label>
			<input id="issue" name="issue" type="number" value={v.issue ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
		</div>
		<div>
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="doi">DOI</label>
			<input id="doi" name="doi" value={v.doi ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" />
		</div>
		<div>
			<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="url">URL</label>
			<input id="url" name="url" type="url" value={v.url ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" />
		</div>
	</div>
	<div class="flex gap-3 pt-2">
		<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Create publication</button>
		<a href="/admin/publications" class="rounded-sm border border-ink-300 px-4 py-2 text-sm">Cancel</a>
	</div>
</form>
