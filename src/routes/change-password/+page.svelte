<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	let submitting = $state(false);
</script>

<svelte:head>
	<title>Change password · PluMA</title>
</svelte:head>

<section class="mx-auto max-w-md px-6 py-20">
	<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
		<i class="fas fa-key"></i> &nbsp;Account security
	</p>
	<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900">Choose a new password</h1>

	{#if data.forced}
		<p class="mt-3 text-ink-700">
			Your account <span class="font-medium">{data.email}</span> is using a temporary password. Set
			a new one to continue.
		</p>
	{:else}
		<p class="mt-3 text-ink-700">Update the password for <span class="font-medium">{data.email}</span>.</p>
	{/if}

	<form
		method="POST"
		class="mt-8 space-y-5"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				await update();
				submitting = false;
			};
		}}
	>
		{#if form?.error}
			<p
				role="alert"
				class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800"
			>
				<i class="fas fa-triangle-exclamation"></i> {form.error}
			</p>
		{/if}

		<div>
			<label
				for="currentPassword"
				class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
			>
				{data.forced ? 'Temporary password' : 'Current password'}
			</label>
			<input
				id="currentPassword"
				name="currentPassword"
				type="password"
				autocomplete="current-password"
				required
				class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm focus:border-primary-700 focus:ring-primary-700"
			/>
		</div>

		<div>
			<label
				for="newPassword"
				class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
			>
				New password
			</label>
			<input
				id="newPassword"
				name="newPassword"
				type="password"
				autocomplete="new-password"
				minlength="10"
				required
				class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm focus:border-primary-700 focus:ring-primary-700"
			/>
			<p class="mt-1 text-xs text-ink-500">At least 10 characters.</p>
		</div>

		<div>
			<label
				for="confirmPassword"
				class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500"
			>
				Confirm new password
			</label>
			<input
				id="confirmPassword"
				name="confirmPassword"
				type="password"
				autocomplete="new-password"
				minlength="10"
				required
				class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm focus:border-primary-700 focus:ring-primary-700"
			/>
		</div>

		<button
			type="submit"
			disabled={submitting}
			class="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-900 disabled:opacity-50"
		>
			{#if submitting}<i class="fas fa-spinner fa-spin"></i>{:else}<i class="fas fa-key"></i>{/if}
			Update password
		</button>
	</form>
</section>
