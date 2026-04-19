<script lang="ts">
	import { page } from '$app/state';

	type CurrentUser = {
		id: number;
		email: string;
		displayName: string | null;
		role: 'Root' | 'Admin' | 'User' | 'Guest';
		enabled: boolean;
	} | null;

	let { currentUser = null }: { currentUser?: CurrentUser } = $props();

	const links = [
		{ href: '/', label: 'Overview' },
		{ href: '/plugins', label: 'Plugins' },
		{ href: '/pipelines', label: 'Pipelines' },
		{ href: '/people', label: 'People' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/getting-started', label: 'Getting Started' }
	];

	let mobileOpen = $state(false);
	let menuOpen = $state(false);

	const canAdmin = $derived(
		currentUser !== null &&
			currentUser.enabled &&
			(currentUser.role === 'Root' || currentUser.role === 'Admin')
	);

	function isActive(href: string, current: string): boolean {
		if (href === '/') return current === '/';
		return current === href || current.startsWith(href + '/');
	}
</script>

<header class="border-b border-ink-200 bg-white/90 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
		<a href="/" class="flex items-center gap-3 no-underline" data-ui>
			<span class="flex h-10 w-10 items-center justify-center rounded-sm bg-primary-700 font-serif text-xl font-semibold text-white">P</span>
			<span class="flex flex-col leading-tight">
				<span class="font-serif text-lg font-semibold text-primary-900">PluMA</span>
				<span class="text-[11px] uppercase tracking-[0.14em] text-ink-500">Plugin-Based Microbiome Analysis</span>
			</span>
		</a>

		<nav class="hidden items-center gap-7 md:flex" data-ui>
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="group relative text-sm font-medium text-ink-700 transition-colors hover:text-primary-700"
					class:text-primary-700={isActive(link.href, page.url.pathname)}
				>
					{link.label}
					<span
						class="absolute -bottom-1.5 left-0 h-[2px] w-full scale-x-0 bg-accent-500 transition-transform duration-200 group-hover:scale-x-100"
						class:scale-x-100={isActive(link.href, page.url.pathname)}
					></span>
				</a>
			{/each}

			{#if currentUser}
				<div class="relative">
					<button
						type="button"
						onclick={() => (menuOpen = !menuOpen)}
						class="inline-flex items-center gap-2 rounded-sm border border-ink-300 px-3 py-1.5 text-sm font-medium text-ink-700 hover:border-primary-700 hover:text-primary-700"
					>
						<i class="fas fa-user-circle"></i>
						{currentUser.displayName ?? currentUser.email}
						<i class="fas fa-caret-down text-[10px]"></i>
					</button>
					{#if menuOpen}
						<div class="absolute right-0 top-full z-20 mt-1 w-56 rounded-sm border border-ink-200 bg-white py-1 shadow-lg">
							<div class="border-b border-ink-100 px-3 py-2">
								<p class="text-xs text-ink-500">Signed in as</p>
								<p class="truncate text-sm font-medium text-ink-900">{currentUser.email}</p>
								<p class="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-accent-600">{currentUser.role}</p>
							</div>
							<a href="/account/passkeys" class="flex items-center gap-2 px-3 py-2 text-sm text-ink-700 hover:bg-ink-100"><i class="fas fa-key w-4 text-primary-700"></i> Passkeys</a>
							{#if canAdmin}
								<a href="/admin" class="flex items-center gap-2 px-3 py-2 text-sm text-ink-700 hover:bg-ink-100"><i class="fas fa-shield-halved w-4 text-primary-700"></i> Admin</a>
							{/if}
							<form method="POST" action="/logout">
								<button type="submit" class="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-ink-700 hover:bg-ink-100">
									<i class="fas fa-right-from-bracket w-4 text-ink-500"></i> Sign out
								</button>
							</form>
						</div>
					{/if}
				</div>
			{:else}
				<a href="/login" class="text-sm font-medium text-ink-700 hover:text-primary-700">Sign in</a>
				<a
					href="/signup"
					class="inline-flex items-center gap-2 rounded-sm border border-ink-300 px-3 py-1.5 text-sm font-medium text-ink-700 hover:border-primary-700 hover:text-primary-700"
				>
					<i class="fas fa-user-plus"></i> Create account
				</a>
			{/if}
		</nav>

		<button
			type="button"
			class="inline-flex items-center justify-center rounded-sm border border-ink-300 p-2 text-ink-700 md:hidden"
			aria-label="Toggle navigation"
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<i class="fas {mobileOpen ? 'fa-xmark' : 'fa-bars'}"></i>
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-ink-200 bg-white md:hidden" data-ui>
			<nav class="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
				{#each links as link (link.href)}
					<a
						href={link.href}
						onclick={() => (mobileOpen = false)}
						class="rounded-sm px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100"
						class:bg-ink-100={isActive(link.href, page.url.pathname)}
						class:text-primary-700={isActive(link.href, page.url.pathname)}
					>
						{link.label}
					</a>
				{/each}
				<hr class="my-2 border-ink-200" />
				{#if currentUser}
					{#if canAdmin}
						<a href="/admin" class="rounded-sm px-3 py-2 text-sm font-medium text-primary-700 hover:bg-ink-100">Admin</a>
					{/if}
					<form method="POST" action="/logout">
						<button type="submit" class="w-full rounded-sm px-3 py-2 text-left text-sm font-medium text-ink-700 hover:bg-ink-100">Sign out</button>
					</form>
				{:else}
					<a href="/login" class="rounded-sm px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100">Sign in</a>
					<a href="/signup" class="rounded-sm px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100">Create account</a>
				{/if}
			</nav>
		</div>
	{/if}
</header>
