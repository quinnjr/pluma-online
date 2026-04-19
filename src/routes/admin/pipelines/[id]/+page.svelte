<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData; form: ActionData } = $props();
	const p = $derived(data.pipeline);
</script>

<svelte:head><title>{data.pipeline.name} · Admin</title></svelte:head>

<header class="mb-6 flex flex-wrap items-start justify-between gap-4">
	<div>
		<a href="/admin/pipelines" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back</a>
		<h1 class="mt-2 font-serif text-3xl font-semibold text-primary-900">{p.name}</h1>
	</div>
	<form method="POST" action="?/delete" use:enhance onsubmit={(e) => { if (!confirm('Delete ' + p.name + '?')) e.preventDefault(); }}>
		<button type="submit" class="rounded-sm border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-800 hover:border-rose-500"><i class="fas fa-trash"></i> Delete pipeline</button>
	</form>
</header>

<form method="POST" action="?/update" class="max-w-2xl space-y-5" use:enhance>
	{#if form?.error}<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}
	{#if form?.ok}<p class="rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800">Saved.</p>{/if}
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="name">Name</label>
		<input id="name" name="name" required value={p.name} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	</div>
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="description">Description</label>
		<textarea id="description" name="description" required rows="3" class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm">{p.description}</textarea>
	</div>
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="githubUrl">GitHub URL</label>
		<input id="githubUrl" name="githubUrl" type="url" required value={p.githubUrl} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" />
	</div>
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="status">Status</label>
		<select id="status" name="status" class="mt-2 w-full rounded-sm border-ink-300 bg-white px-3 py-2 text-sm">
			{#each data.statuses as s (s)}<option value={s} selected={s === p.status}>{s}</option>{/each}
		</select>
	</div>
	<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Save changes</button>
</form>
