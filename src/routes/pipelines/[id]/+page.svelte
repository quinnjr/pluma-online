<script lang="ts">
	import DetailHeader from '$lib/components/DetailHeader.svelte';
	import DetailSidebar from '$lib/components/DetailSidebar.svelte';
	import ReadmeBody from '$lib/components/ReadmeBody.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const STATUS_PILL: Record<string, { label: string; className: string }> = {
		Completed: { label: 'Completed & Released', className: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
		InProgress: { label: 'In Progress', className: 'bg-amber-50 text-amber-800 border-amber-200' },
		Future: { label: 'Future', className: 'bg-ink-100 text-ink-500 border-ink-200' }
	};

	const meta = $derived([
		{ label: 'Status', value: STATUS_PILL[data.entity.status]?.label ?? data.entity.status },
		...(data.entity.author?.displayName ? [{ label: 'Author', value: data.entity.author.displayName }] : []),
		{ label: 'Rating', value: data.entity.rating.toString() },
		{ label: 'Updated', value: new Date(data.entity.updatedAt).toISOString().slice(0, 10) }
	]);
</script>

<svelte:head><title>{data.entity.name} · Pipeline</title></svelte:head>

<DetailHeader
	name={data.entity.name}
	githubUrl={data.entity.githubUrl}
	statusPill={STATUS_PILL[data.entity.status] ?? null}
/>

<main class="mx-auto max-w-6xl px-6 py-10">
	<div class="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
		<ReadmeBody
			html={data.readmeHtml}
			status={data.readmeStatus}
			fallbackDescription={data.entity.description}
			githubUrl={data.entity.githubUrl}
		/>
		<DetailSidebar {meta} kind="pipeline" />
	</div>
</main>
