<script lang="ts">
	import type { Snippet } from 'svelte';
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/logo.png" />
	<title>PluMA · Plugin-Based Microbiome Analysis</title>
	<meta
		name="description"
		content="PluMA is a lightweight, flexible, plugin-based microbiome analysis pipeline from the BioRG group at Florida International University."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar currentUser={data.currentUser} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
