<script lang="ts">
	import DetailHeader from '$lib/components/DetailHeader.svelte';
	import DetailSidebar from '$lib/components/DetailSidebar.svelte';
	import ReadmeBody from '$lib/components/ReadmeBody.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = $derived([
		{ label: 'Category', value: data.entity.category.name },
		{ label: 'Language', value: data.entity.language.name },
		{ label: 'Rating', value: data.entity.rating.toString() },
		...(data.entity.author?.displayName ? [{ label: 'Author', value: data.entity.author.displayName }] : []),
		{ label: 'Updated', value: data.entity.updatedAt.toString().slice(0, 10) }
	]);

	const badges = $derived([
		{ kind: 'category', label: data.entity.category.name },
		{ kind: 'language', label: data.entity.language.name }
	]);
</script>

<svelte:head><title>{data.entity.name} · Plugin</title></svelte:head>

<DetailHeader name={data.entity.name} githubUrl={data.entity.githubUrl} {badges} />

<main class="mx-auto max-w-6xl px-6 py-10">
	<div class="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
		<ReadmeBody
			html={data.readmeHtml}
			status={data.readmeStatus}
			fallbackDescription={data.entity.description}
			githubUrl={data.entity.githubUrl}
		/>
		<DetailSidebar {meta} kind="plugin" recommendations={data.recommendations} />
	</div>
</main>
