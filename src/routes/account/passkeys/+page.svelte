<script lang="ts">
	import { startRegistration } from '@simplewebauthn/browser';
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let registering = $state(false);
	let deleting = $state<string | null>(null);
	let message = $state<{ type: 'ok' | 'error'; text: string } | null>(null);
	let label = $state('');

	async function registerPasskey() {
		registering = true;
		message = null;
		try {
			const optRes = await fetch('/api/passkeys/register/options', { method: 'POST' });
			if (!optRes.ok) throw new Error('Failed to get registration options');
			const options = await optRes.json();

			const credential = await startRegistration({ optionsJSON: options });

			const verifyRes = await fetch('/api/passkeys/register/verify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...credential, label: label || undefined })
			});
			const result = await verifyRes.json();
			if (!result.verified) throw new Error('Verification failed');

			message = { type: 'ok', text: 'Passkey registered successfully.' };
			label = '';
			await invalidateAll();
		} catch (e) {
			const msg = e instanceof Error ? e.message : 'Registration failed';
			if (msg.includes('cancelled') || msg.includes('abort')) {
				message = null;
			} else {
				message = { type: 'error', text: msg };
			}
		} finally {
			registering = false;
		}
	}

	async function deletePasskey(id: string) {
		if (!confirm('Remove this passkey? You won\'t be able to use it to sign in anymore.')) return;
		deleting = id;
		message = null;
		try {
			const res = await fetch('/api/passkeys/delete', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id })
			});
			if (!res.ok) throw new Error('Delete failed');
			message = { type: 'ok', text: 'Passkey removed.' };
			await invalidateAll();
		} catch (e) {
			message = { type: 'error', text: e instanceof Error ? e.message : 'Delete failed' };
		} finally {
			deleting = null;
		}
	}
</script>

<svelte:head><title>Passkeys · Account · PluMA</title></svelte:head>

<section class="mx-auto max-w-2xl px-6 py-20">
	<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
		<i class="fas fa-key"></i> &nbsp;Passkeys
	</p>
	<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900">Manage passkeys</h1>
	<p class="mt-3 text-ink-700">
		Passkeys let you sign in with biometrics or a security key — no password needed. Register one or
		more authenticators below; any of them can sign you in.
	</p>

	{#if message}
		<p
			class="mt-6 rounded-sm border px-4 py-3 text-sm"
			class:border-emerald-200={message.type === 'ok'}
			class:bg-emerald-50={message.type === 'ok'}
			class:text-emerald-800={message.type === 'ok'}
			class:border-rose-200={message.type === 'error'}
			class:bg-rose-50={message.type === 'error'}
			class:text-rose-800={message.type === 'error'}
		>
			{#if message.type === 'ok'}<i class="fas fa-circle-check"></i>{:else}<i class="fas fa-triangle-exclamation"></i>{/if}
			{message.text}
		</p>
	{/if}

	<div class="mt-8 rounded-sm border border-ink-200 bg-white p-6">
		<h2 class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
			Register a new passkey
		</h2>
		<div class="mt-4 flex gap-3">
			<input
				type="text"
				bind:value={label}
				placeholder="Label (e.g. MacBook Touch ID)"
				class="flex-1 rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm"
			/>
			<button
				type="button"
				disabled={registering}
				onclick={registerPasskey}
				class="inline-flex items-center gap-2 rounded-sm bg-primary-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-900 disabled:opacity-50"
			>
				{#if registering}<i class="fas fa-spinner fa-spin"></i>{:else}<i class="fas fa-fingerprint"></i>{/if}
				Register passkey
			</button>
		</div>
	</div>

	<section class="mt-8">
		<h2 class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
			Your passkeys
		</h2>
		{#if data.passkeys.length === 0}
			<p class="mt-4 text-sm text-ink-500">No passkeys registered yet.</p>
		{:else}
			<ul class="mt-4 divide-y divide-ink-200 border-y border-ink-200">
				{#each data.passkeys as pk (pk.id)}
					<li class="flex items-center justify-between gap-4 py-4">
						<div>
							<p class="font-medium text-ink-900">
								<i class="fas fa-key text-primary-700"></i>&ensp;{pk.label}
							</p>
							<p class="mt-0.5 text-xs text-ink-500" data-ui>
								{pk.deviceType === 'multiDevice' ? 'Synced passkey' : 'Single-device key'}
								{#if pk.backedUp}&middot; Backed up{/if}
								&middot; Added {new Date(pk.createdAt).toLocaleDateString()}
							</p>
						</div>
						<button
							type="button"
							disabled={deleting === pk.id}
							onclick={() => deletePasskey(pk.id)}
							class="rounded-sm border border-rose-300 bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-800 hover:border-rose-500 disabled:opacity-50"
						>
							{#if deleting === pk.id}<i class="fas fa-spinner fa-spin"></i>{:else}<i class="fas fa-trash"></i>{/if}
							Remove
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</section>

	<p class="mt-10 text-xs text-ink-500" data-ui>
		Passkeys are stored on your device or synced via your platform's credential manager. PluMA never
		sees your biometric data — only a public key.
	</p>
</section>
