<script lang="ts">
	import { enhance } from '$app/forms';
	import PersonForm from '$lib/components/PersonForm.svelte';
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData; form: ActionData } = $props();
	const p = $derived(data.person);
</script>

<svelte:head><title>{data.person.name} · Admin</title></svelte:head>

<header class="mb-6 flex flex-wrap items-start justify-between gap-4">
	<div>
		<a href="/admin/people" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back</a>
		<h1 class="mt-2 font-serif text-3xl font-semibold text-primary-900">{p.name}</h1>
	</div>
	<form method="POST" action="?/delete" use:enhance onsubmit={(e) => { if (!confirm('Delete ' + p.name + '?')) e.preventDefault(); }}>
		<button type="submit" class="rounded-sm border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-800 hover:border-rose-500"><i class="fas fa-trash"></i> Delete</button>
	</form>
</header>

<form method="POST" action="?/update" class="max-w-2xl space-y-5" use:enhance>
	{#if form?.error}<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}
	{#if form?.ok}<p class="rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800">Saved.</p>{/if}
	<PersonForm
		name={p.name}
		role={p.role}
		kind={p.kind}
		sortOrder={p.sortOrder}
		links={data.links}
	/>
	<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Save changes</button>
</form>
