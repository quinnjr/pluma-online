<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { startAuthentication, browserSupportsWebAuthn } from '@simplewebauthn/browser';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	let submitting = $state(false);
	let passkeyLoading = $state(false);
	let passkeyError = $state<string | null>(null);
	const webauthnSupported = $derived(typeof window !== 'undefined' && browserSupportsWebAuthn());

	async function loginWithPasskey() {
		passkeyLoading = true;
		passkeyError = null;
		try {
			const optRes = await fetch('/api/passkeys/login/options', { method: 'POST' });
			if (!optRes.ok) throw new Error('Failed to get login options');
			const options = await optRes.json();

			const credential = await startAuthentication({ optionsJSON: options });

			const verifyRes = await fetch('/api/passkeys/login/verify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(credential)
			});
			const result = await verifyRes.json();
			if (!result.verified) throw new Error('Passkey verification failed');

			await goto(data.redirectTo || '/', { invalidateAll: true });
		} catch (e) {
			const msg = e instanceof Error ? e.message : 'Passkey login failed';
			if (!msg.includes('cancelled') && !msg.includes('abort')) {
				passkeyError = msg;
			}
		} finally {
			passkeyLoading = false;
		}
	}
</script>

<svelte:head>
	<title>Sign in · PluMA</title>
</svelte:head>

<section class="mx-auto max-w-md px-6 py-20">
	<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
		<i class="fas fa-right-to-bracket"></i> &nbsp;Sign in
	</p>
	<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900">Welcome back</h1>
	<p class="mt-3 text-ink-700">
		Sign in with your verified PluMA account. New account?
		<a class="text-primary-700 underline" href="/signup">Create one</a>.
	</p>

	{#if webauthnSupported}
		<div class="mt-8">
			{#if passkeyError}
				<p class="mb-3 rounded-sm border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
					<i class="fas fa-triangle-exclamation"></i> {passkeyError}
				</p>
			{/if}
			<button
				type="button"
				disabled={passkeyLoading}
				onclick={loginWithPasskey}
				class="inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-primary-700 bg-white px-5 py-3 text-sm font-medium text-primary-700 transition hover:bg-primary-50 disabled:opacity-50"
			>
				{#if passkeyLoading}<i class="fas fa-spinner fa-spin"></i>{:else}<i class="fas fa-fingerprint"></i>{/if}
				Sign in with a passkey
			</button>
			<div class="relative my-6">
				<div class="absolute inset-0 flex items-center"><div class="w-full border-t border-ink-200"></div></div>
				<div class="relative flex justify-center">
					<span class="bg-ink-50 px-3 font-sans text-xs uppercase tracking-widest text-ink-500">or use a password</span>
				</div>
			</div>
		</div>
	{/if}

	<form
		method="POST"
		class="space-y-5"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				await update();
				submitting = false;
			};
		}}
	>
		{#if data.redirectTo}<input type="hidden" name="redirectTo" value={data.redirectTo} />{/if}
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
				autocomplete="email webauthn"
				required
				value={form?.email ?? ''}
				class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm focus:border-primary-700 focus:ring-primary-700"
			/>
		</div>
		<div>
			<label for="password" class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				autocomplete="current-password"
				required
				class="mt-2 w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm focus:border-primary-700 focus:ring-primary-700"
			/>
		</div>
		<button
			type="submit"
			disabled={submitting}
			class="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-900 disabled:opacity-50"
		>
			{#if submitting}<i class="fas fa-spinner fa-spin"></i>{:else}<i class="fas fa-right-to-bracket"></i>{/if}
			Sign in with password
		</button>
	</form>
</section>
