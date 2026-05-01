<script lang="ts">
	import { PersonKind } from '@prisma/client';

	type Link = { label: string; href: string };
	type Props = {
		name?: string;
		role?: string;
		kind?: string;
		sortOrder?: number;
		links?: Link[];
	};

	let {
		name = '',
		role = '',
		kind = 'Contributor',
		sortOrder = 100,
		links = []
	}: Props = $props();

	// Seed mutable state from the initial prop. The prop won't change after mount;
	// this is intentional, so the "capture initial value" warning is acceptable.
	// svelte-ignore state_referenced_locally
	let linksState = $state<Link[]>(links.length ? [...links] : [{ label: '', href: '' }]);

	function addLink() {
		linksState = [...linksState, { label: '', href: '' }];
	}
	function removeLink(i: number) {
		linksState = linksState.filter((_, idx) => idx !== i);
	}
</script>

<div>
	<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="name">Name</label>
	<input id="name" name="name" required value={name} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
</div>
<div>
	<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="role">Role / position</label>
	<input id="role" name="role" required value={role} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
</div>
<div class="grid gap-5 sm:grid-cols-2">
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="kind">Kind</label>
		<select id="kind" name="kind" class="mt-2 w-full rounded-sm border-ink-300 bg-white px-3 py-2 text-sm">
			{#each Object.values(PersonKind) as k (k)}<option value={k} selected={k === kind}>{k}</option>{/each}
		</select>
	</div>
	<div>
		<label class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500" for="sortOrder">Sort order</label>
		<input id="sortOrder" name="sortOrder" type="number" value={sortOrder} class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
	</div>
</div>

<div>
	<div class="flex items-center justify-between">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Links</p>
		<button type="button" onclick={addLink} class="text-xs text-primary-700 hover:underline"><i class="fas fa-plus"></i> Add link</button>
	</div>
	<div class="mt-2 space-y-2">
		{#each linksState as link, i (i)}
			<div class="flex gap-2">
				<input type="text" name="linkLabel" bind:value={linksState[i].label} placeholder="Label (e.g. Homepage)" class="w-40 rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm" />
				<input type="url" name="linkHref" bind:value={linksState[i].href} placeholder="https://…" class="flex-1 rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm font-mono" />
				<button type="button" aria-label="Remove link" onclick={() => removeLink(i)} class="rounded-sm border border-ink-300 px-2 text-xs text-ink-500 hover:border-rose-300 hover:text-rose-700"><i class="fas fa-xmark"></i></button>
			</div>
		{/each}
	</div>
</div>
