<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<svelte:head><title>New plugin · Admin</title></svelte:head>

<header class="mb-6">
	<a href="/admin/plugins" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back to plugins</a>
	<h1 class="mt-2 font-serif text-3xl font-semibold text-primary-900">New plugin</h1>
</header>

<form method="POST" class="max-w-2xl space-y-5" use:enhance>
	{#if form?.error}
		<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800"><i class="fas fa-triangle-exclamation"></i> {form.error}</p>
	{/if}
	<div>
		<label for="name" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Name</label>
		<input id="name" name="name" required value={form?.name ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	</div>
	<div>
		<label for="description" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Description</label>
		<textarea id="description" name="description" required rows="3" class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm">{form?.description ?? ''}</textarea>
	</div>
	<div>
		<label for="githubUrl" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">GitHub URL</label>
		<input id="githubUrl" name="githubUrl" type="url" required value={form?.githubUrl ?? ''} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" />
	</div>
	<div class="grid gap-5 sm:grid-cols-2">
		<div>
			<label for="categoryId" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Category</label>
			<select id="categoryId" name="categoryId" required class="mt-2 w-full rounded-sm border-ink-300 bg-white px-3 py-2 text-sm">
				<option value="">Select…</option>
				{#each data.categories as c (c.id)}<option value={c.id} selected={form?.categoryId === c.id}>{c.name}</option>{/each}
			</select>
		</div>
		<div>
			<label for="languageId" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Language</label>
			<select id="languageId" name="languageId" required class="mt-2 w-full rounded-sm border-ink-300 bg-white px-3 py-2 text-sm">
				<option value="">Select…</option>
				{#each data.languages as l (l.id)}<option value={l.id} selected={form?.languageId === l.id}>{l.name}</option>{/each}
			</select>
		</div>
	</div>
	<label class="flex items-center gap-2 text-sm"><input type="checkbox" name="verified" checked={form?.verified ?? true} /> Verified plugin</label>
	<div class="flex gap-3 pt-2">
		<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Create plugin</button>
		<a href="/admin/plugins" class="rounded-sm border border-ink-300 px-4 py-2 text-sm">Cancel</a>
	</div>
</form>
