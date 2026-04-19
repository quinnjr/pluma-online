<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let submitting = $state(false);
</script>

<svelte:head>
	<title>Create an account · PluMA</title>
</svelte:head>

<section class="mx-auto max-w-md px-6 py-20">
	<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
		<i class="fas fa-user-plus"></i> &nbsp;New account
	</p>
	<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900">Create an account</h1>
	<p class="mt-3 text-ink-700">
		Accounts are gated — new sign-ups are held until an administrator verifies you. The first account
		matching the <code class="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-sm">ROOT_EMAIL</code> environment
		variable is granted Root privileges automatically.
	</p>

	{#if form?.pending}
		<div
			class="mt-8 rounded-sm border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800"
		>
			<p class="font-semibold">
				<i class="fas fa-envelope-circle-check"></i> Account submitted for review
			</p>
			<p class="mt-1 text-emerald-700">
				Thanks, <strong>{form.displayName}</strong>. An administrator will verify <strong
					>{form.email}</strong
				> before you can sign in.
			</p>
		</div>
	{:else}
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
				<p class="rounded-sm border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
					<i class="fas fa-triangle-exclamation"></i> {form.error}
				</p>
			{/if}
			<div>
				<label for="email" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Email</label>
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					required
					value={form?.email ?? ''}
					class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm"
				/>
			</div>
			<div>
				<label for="displayName" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Display name</label>
				<input
					id="displayName"
					name="displayName"
					type="text"
					autocomplete="nickname"
					required
					minlength="2"
					value={form?.displayName ?? ''}
					class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm"
				/>
			</div>
			<div>
				<label for="institution" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Institution <span class="normal-case tracking-normal text-ink-300">(optional)</span></label>
				<input
					id="institution"
					name="institution"
					type="text"
					autocomplete="organization"
					value={form?.institution ?? ''}
					class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm"
				/>
			</div>
			<div>
				<label for="password" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Password <span class="normal-case tracking-normal text-ink-300">(min 10 chars)</span></label>
				<input
					id="password"
					name="password"
					type="password"
					autocomplete="new-password"
					required
					minlength="10"
					class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm"
				/>
			</div>
			<button
				type="submit"
				disabled={submitting}
				class="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-900 disabled:opacity-50"
			>
				{#if submitting}<i class="fas fa-spinner fa-spin"></i>{:else}<i class="fas fa-user-plus"></i>{/if}
				Create account
			</button>
		</form>
	{/if}

	<p class="mt-6 text-sm text-ink-500" data-ui>
		Already have an account? <a class="text-primary-700 underline" href="/login">Sign in</a>.
	</p>
</section>
