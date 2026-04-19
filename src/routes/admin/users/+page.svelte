<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	function roleBadge(role: string): string {
		if (role === 'Root') return 'bg-accent-500 text-white';
		if (role === 'Admin') return 'bg-primary-700 text-white';
		return 'bg-ink-100 text-ink-700';
	}
</script>

<svelte:head><title>Users · Admin · PluMA</title></svelte:head>

<header class="mb-6">
	<h1 class="font-serif text-3xl font-semibold text-primary-900">Users</h1>
	<p class="mt-1 text-sm text-ink-500">
		Approve pending accounts. {#if data.can.promoteUsers}Root can also promote users to Admin or demote Admins back.{/if}
	</p>
	{#if form?.error}
		<p class="mt-4 rounded-sm border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">
			<i class="fas fa-triangle-exclamation"></i> {form.error}
		</p>
	{/if}
</header>

<table class="w-full border-collapse text-sm">
	<thead>
		<tr class="border-b border-ink-200 text-left font-sans text-[11px] uppercase tracking-[0.12em] text-ink-500">
			<th class="py-2 pr-4">Display name</th>
			<th class="py-2 pr-4">Email</th>
			<th class="py-2 pr-4">Role</th>
			<th class="py-2 pr-4">Status</th>
			<th class="py-2 pr-4">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.users as u (u.id)}
			<tr class="border-b border-ink-100 align-top">
				<td class="py-3 pr-4">
					<p class="font-medium text-ink-900">{u.displayName ?? '—'}</p>
					{#if u.institution}<p class="text-xs text-ink-500">{u.institution}</p>{/if}
				</td>
				<td class="py-3 pr-4 font-mono text-xs text-ink-700">{u.email}</td>
				<td class="py-3 pr-4">
					<span class="rounded-sm px-2 py-0.5 text-[11px] font-medium {roleBadge(u.role)}">{u.role}</span>
				</td>
				<td class="py-3 pr-4">
					{#if u.enabled}
						<span class="rounded-sm bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800">Verified</span>
						{#if u.verifiedAt}<p class="mt-1 text-[11px] text-ink-500">by {u.verifiedBy?.displayName ?? u.verifiedBy?.email ?? '—'}</p>{/if}
					{:else}
						<span class="rounded-sm bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800">Pending</span>
					{/if}
				</td>
				<td class="py-3 pr-4">
					<div class="flex flex-wrap gap-1.5">
						{#if !u.enabled}
							<form method="POST" action="?/verify" use:enhance>
								<input type="hidden" name="id" value={u.id} />
								<button
									type="submit"
									class="rounded-sm border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800 hover:border-emerald-500"
								>
									<i class="fas fa-check"></i> Verify
								</button>
							</form>
						{/if}
						{#if u.enabled && u.id !== data.currentUserId && u.role !== 'Root'}
							<form method="POST" action="?/disable" use:enhance>
								<input type="hidden" name="id" value={u.id} />
								<button
									type="submit"
									class="rounded-sm border border-rose-300 bg-rose-50 px-2.5 py-1 text-[11px] font-medium text-rose-800 hover:border-rose-500"
								>
									<i class="fas fa-ban"></i> Disable
								</button>
							</form>
						{/if}
						{#if data.can.promoteUsers && u.role === 'User'}
							<form method="POST" action="?/promote" use:enhance>
								<input type="hidden" name="id" value={u.id} />
								<button
									type="submit"
									class="rounded-sm border border-primary-500 bg-primary-50 px-2.5 py-1 text-[11px] font-medium text-primary-700 hover:border-primary-700"
								>
									<i class="fas fa-arrow-up"></i> Promote → Admin
								</button>
							</form>
						{/if}
						{#if data.can.promoteUsers && u.role === 'Admin'}
							<form method="POST" action="?/demote" use:enhance>
								<input type="hidden" name="id" value={u.id} />
								<button
									type="submit"
									class="rounded-sm border border-ink-300 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-700 hover:border-primary-700"
								>
									<i class="fas fa-arrow-down"></i> Demote → User
								</button>
							</form>
						{/if}
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
