<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	const current = $derived(page.url.pathname);

	type NavItem = { href: string; label: string; icon: string; badge?: number; show: boolean };

	const items = $derived.by<NavItem[]>(() => [
		{ href: '/admin', label: 'Dashboard', icon: 'fa-gauge', show: true },
		{
			href: '/admin/users',
			label: 'Users',
			icon: 'fa-user-check',
			badge: data.counts.pendingUsers,
			show: data.can.verifyUsers
		},
		{ href: '/admin/plugins', label: 'Plugins', icon: 'fa-puzzle-piece', show: data.can.managePlugins },
		{
			href: '/admin/pipelines',
			label: 'Pipelines',
			icon: 'fa-diagram-project',
			show: data.can.managePipelines
		},
		{
			href: '/admin/publications',
			label: 'Publications',
			icon: 'fa-book',
			show: data.can.managePublications
		},
		{ href: '/admin/people', label: 'People', icon: 'fa-user-group', show: data.can.managePeople },
		{
			href: '/admin/categories',
			label: 'Categories',
			icon: 'fa-folder-tree',
			show: data.can.manageCategories
		},
		{
			href: '/admin/languages',
			label: 'Languages',
			icon: 'fa-code',
			show: data.can.manageLanguages
		}
	]);

	function isActive(href: string): boolean {
		if (href === '/admin') return current === '/admin';
		return current === href || current.startsWith(href + '/');
	}
</script>

<div class="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[240px_1fr]">
	<aside class="lg:sticky lg:top-6 lg:self-start" data-ui>
		<p class="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-600">
			<i class="fas fa-shield-halved"></i> &nbsp;Admin
		</p>
		<nav class="mt-4 space-y-1">
			{#each items as item (item.href)}
				{#if item.show}
					<a
						href={item.href}
						class="flex items-center justify-between rounded-sm px-3 py-2 text-sm font-medium transition"
						class:bg-primary-50={isActive(item.href)}
						class:text-primary-700={isActive(item.href)}
						class:text-ink-700={!isActive(item.href)}
					>
						<span class="flex items-center gap-2.5"><i class="fas {item.icon} w-4 text-primary-700"></i> {item.label}</span>
						{#if item.badge}<span class="rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-semibold text-white">{item.badge}</span>{/if}
					</a>
				{/if}
			{/each}
		</nav>
	</aside>

	<section>
		{@render children()}
	</section>
</div>
