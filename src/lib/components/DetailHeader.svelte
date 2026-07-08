<script lang="ts">
	type Badge = { kind: string; label: string; className?: string };
	type Props = {
		name: string;
		githubUrl: string;
		badges?: Badge[];
		statusPill?: { label: string; className: string } | null;
	};
	let { name, githubUrl, badges = [], statusPill = null }: Props = $props();
</script>

<header class="border-b border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-10">
		<h1 class="font-serif text-3xl font-semibold text-primary-900 md:text-4xl">{name}</h1>
		<div class="mt-3 flex flex-wrap items-center gap-2">
			{#each badges as b (b.kind + b.label)}
				<span class="rounded-sm border px-2 py-0.5 font-sans text-[11px] font-medium {b.className ?? 'border-ink-200 bg-ink-50 text-ink-700'}" data-ui>{b.label}</span>
			{/each}
			{#if statusPill}
				<span class="rounded-sm border px-2 py-0.5 font-sans text-[11px] font-medium {statusPill.className}" data-ui>{statusPill.label}</span>
			{/if}
			<a class="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-ink-500 hover:text-primary-700" data-ui href={githubUrl} target="_blank" rel="noopener noreferrer">
				<i class="fab fa-github"></i>
				{githubUrl.replace('https://github.com/', '')}
			</a>
		</div>
	</div>
</header>
