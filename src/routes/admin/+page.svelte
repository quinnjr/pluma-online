<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head><title>Admin · PluMA</title></svelte:head>

<header>
	<h1 class="font-serif text-3xl font-semibold text-primary-900">Admin dashboard</h1>
	<p class="mt-1 text-sm text-ink-500">
		Overview of the PluMA catalog. Use the sidebar to manage each section.
	</p>
</header>

<dl class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
	<a href="/admin/users" class="rounded-sm border border-ink-200 bg-white p-5 transition hover:border-primary-700">
		<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">Pending users</dt>
		<dd class="mt-2 font-serif text-3xl font-semibold text-accent-600">{data.counts.pendingUsers}</dd>
	</a>
	<a href="/admin/plugins" class="rounded-sm border border-ink-200 bg-white p-5 transition hover:border-primary-700">
		<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">Plugins</dt>
		<dd class="mt-2 font-serif text-3xl font-semibold text-primary-900">{data.counts.plugins}</dd>
	</a>
	<a href="/admin/pipelines" class="rounded-sm border border-ink-200 bg-white p-5 transition hover:border-primary-700">
		<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">Pipelines</dt>
		<dd class="mt-2 font-serif text-3xl font-semibold text-primary-900">{data.counts.pipelines}</dd>
	</a>
	<a href="/admin/publications" class="rounded-sm border border-ink-200 bg-white p-5 transition hover:border-primary-700">
		<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">Publications</dt>
		<dd class="mt-2 font-serif text-3xl font-semibold text-primary-900">{data.counts.publications}</dd>
	</a>
</dl>

<section class="mt-10">
	<h2 class="font-serif text-lg font-semibold text-primary-900">Recently-created accounts</h2>
	<table class="mt-4 w-full border-collapse text-sm">
		<thead>
			<tr class="border-b border-ink-200 text-left font-sans text-[11px] uppercase tracking-[0.12em] text-ink-500">
				<th class="py-2 pr-4">Display name</th>
				<th class="py-2 pr-4">Email</th>
				<th class="py-2 pr-4">Role</th>
				<th class="py-2 pr-4">Status</th>
				<th class="py-2 pr-4">Created</th>
			</tr>
		</thead>
		<tbody>
			{#each data.recentUsers as u (u.id)}
				<tr class="border-b border-ink-100">
					<td class="py-2 pr-4 font-medium text-ink-900">{u.displayName ?? '—'}</td>
					<td class="py-2 pr-4 font-mono text-xs text-ink-700">{u.email}</td>
					<td class="py-2 pr-4">{u.role}</td>
					<td class="py-2 pr-4">
						{#if u.enabled}
							<span class="rounded-sm bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800">Verified</span>
						{:else}
							<span class="rounded-sm bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800">Pending</span>
						{/if}
					</td>
					<td class="py-2 pr-4 text-xs text-ink-500">{new Date(u.createdAt).toLocaleDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
