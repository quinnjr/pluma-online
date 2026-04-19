<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData; form: ActionData } = $props();
	// form fail() returns include rehydrated values; use loose any-access for them.
	const f = $derived((form ?? {}) as Record<string, unknown>);
</script>

<svelte:head><title>New pipeline · Admin</title></svelte:head>

<header class="mb-6">
	<a href="/admin/pipelines" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back</a>
	<h1 class="mt-2 font-serif text-3xl font-semibold text-primary-900">New pipeline</h1>
</header>

<form method="POST" class="max-w-2xl space-y-5" use:enhance>
	{#if form?.error}<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}
	<div>
		<label for="name" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Name</label>
		<input id="name" name="name" required value={(f.name as string | undefined) ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	</div>
	<div>
		<label for="description" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Description</label>
		<textarea id="description" name="description" required rows="3" class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm">{(f.description as string | undefined) ?? ''}</textarea>
	</div>
	<div>
		<label for="githubUrl" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">GitHub URL</label>
		<input id="githubUrl" name="githubUrl" type="url" required value={(f.githubUrl as string | undefined) ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" />
	</div>
	<div>
		<label for="status" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Status</label>
		<select id="status" name="status" class="mt-2 w-full rounded-sm border-ink-300 bg-white px-3 py-2 text-sm">
			{#each data.statuses as s (s)}<option value={s} selected={((f.status as string | undefined) ?? 'Completed') === s}>{s}</option>{/each}
		</select>
	</div>
	<div class="flex gap-3 pt-2">
		<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Create pipeline</button>
		<a href="/admin/pipelines" class="rounded-sm border border-ink-300 px-4 py-2 text-sm">Cancel</a>
	</div>
</form>
