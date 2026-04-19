<script lang="ts">
	import { enhance } from '$app/forms';
	import PersonForm from '$lib/components/PersonForm.svelte';
	import type { ActionData } from './$types';
	let { form }: { form: ActionData } = $props();
</script>

<svelte:head><title>New person · Admin</title></svelte:head>

<header class="mb-6">
	<a href="/admin/people" class="text-sm text-ink-500 hover:text-primary-700"><i class="fas fa-arrow-left"></i> Back</a>
	<h1 class="mt-2 font-serif text-3xl font-semibold text-primary-900">New person</h1>
</header>

<form method="POST" class="max-w-2xl space-y-5" use:enhance>
	{#if form?.error}<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">{form.error}</p>{/if}
	<PersonForm />
	<div class="flex gap-3 pt-2">
		<button type="submit" class="rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-900"><i class="fas fa-save"></i> Create person</button>
		<a href="/admin/people" class="rounded-sm border border-ink-300 px-4 py-2 text-sm">Cancel</a>
	</div>
</form>
