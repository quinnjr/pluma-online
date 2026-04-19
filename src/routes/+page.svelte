<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const totalPlugins = $derived(data.stats.pluginCount);
	const categoryCount = $derived(data.stats.categoryCount);
	const languageCount = $derived(data.stats.languageCount);
	const pipelineCount = $derived(data.stats.pipelineCount);
	const keyPaper = $derived(data.keyPaper);

	const features = [
		{
			icon: 'fa-puzzle-piece',
			title: 'Plugin Architecture',
			body: 'Stages are loaded dynamically at runtime. Add, remove, or substitute a step without touching the core engine.'
		},
		{
			icon: 'fa-language',
			title: 'Language-Agnostic',
			body: 'Implement plugins in C++, Python, Perl, R, or Java. Stages in different languages interoperate through a shared file interface.'
		},
		{
			icon: 'fa-feather-pointed',
			title: 'Lightweight',
			body: 'The core executable is under 200KB. Download only the plugins your pipeline needs from the pool of over 1,500.'
		},
		{
			icon: 'fa-microchip',
			title: 'CPU &amp; GPU Support',
			body: 'Dedicated GPU plugins accelerate computationally intensive stages without changing the pipeline definition.'
		},
		{
			icon: 'fa-layer-group',
			title: 'Composable Pipelines',
			body: 'Pipelines are declarative — stages execute sequentially and can be reordered or swapped through configuration alone.'
		},
		{
			icon: 'fa-flask',
			title: 'Research-Proven',
			body: 'Used across metagenomics, metatranscriptomics, metabolomics, multiomics, and epigenetics studies.'
		}
	];

</script>

<section class="relative overflow-hidden border-b border-ink-200 bg-white">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,58,82,0.08),transparent_60%)]"></div>
	<div class="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[3fr_2fr] md:py-28">
		<div>
			<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
				<i class="fas fa-dna"></i> &nbsp;Bioinformatics Research Group · FIU
			</p>
			<h1 class="mt-5 font-serif text-5xl font-semibold leading-[1.08] text-primary-900 md:text-6xl">
				A lightweight,<br />
				<em class="text-accent-600">plugin-based</em> pipeline<br />
				for microbiome analysis.
			</h1>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
				PluMA lets researchers implement an algorithm in their programming language of choice and test
				it within a larger pipeline — alongside stages written in other languages that use different
				file formats. The core is infinitely extensible through dynamically loaded plugins.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-3" data-ui>
				<a
					href="/plugins"
					class="inline-flex items-center gap-2 rounded-sm bg-primary-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-900"
				>
					<i class="fas fa-magnifying-glass"></i> Browse Plugins
				</a>
				<a
					href="/getting-started"
					class="inline-flex items-center gap-2 rounded-sm border border-ink-300 px-5 py-3 text-sm font-medium text-ink-700 transition hover:border-primary-700 hover:text-primary-700"
				>
					<i class="fas fa-book-open"></i> Getting Started
				</a>
				<a
					href="https://github.com/FIUBioRG/PluMA"
					target="_blank"
					rel="noopener"
					class="inline-flex items-center gap-2 rounded-sm border border-transparent px-2 py-3 text-sm font-medium text-ink-700 hover:text-primary-700"
				>
					<i class="fab fa-github"></i> Source on GitHub
				</a>
			</div>
		</div>

		<aside class="self-end">
			<dl class="grid grid-cols-2 gap-6 border-l-2 border-accent-500 pl-6 sm:grid-cols-4">
				<div>
					<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
						Plugins
					</dt>
					<dd class="mt-1 font-serif text-4xl font-semibold text-primary-900">
						{totalPlugins.toLocaleString()}
					</dd>
				</div>
				<div>
					<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
						Pipelines
					</dt>
					<dd class="mt-1 font-serif text-4xl font-semibold text-primary-900">
						{pipelineCount.toLocaleString()}
					</dd>
				</div>
				<div>
					<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
						Categories
					</dt>
					<dd class="mt-1 font-serif text-4xl font-semibold text-primary-900">{categoryCount}</dd>
				</div>
				<div>
					<dt class="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
						Languages
					</dt>
					<dd class="mt-1 font-serif text-4xl font-semibold text-primary-900">{languageCount}</dd>
				</div>
			</dl>

			<figure class="mt-10 rounded-sm border border-ink-200 bg-ink-50 p-6 shadow-sm">
				<blockquote class="font-serif text-base italic leading-relaxed text-ink-900">
					“Plugin-based architectures allow developers to implement a new algorithm in their
					programming language of choice, and easily test and debug it within a larger pipeline
					alongside stages in different languages.”
				</blockquote>
				<figcaption class="mt-4 font-sans text-xs text-ink-500" data-ui>
					— Cickovski &amp; Narasimhan, <em>Bioinformatics</em> (2018)
				</figcaption>
			</figure>
		</aside>
	</div>
</section>

<section class="mx-auto max-w-6xl px-6 py-20">
	<header class="max-w-3xl">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
			Abstract
		</p>
		<h2 class="mt-3 font-serif text-3xl font-semibold text-primary-900">What is PluMA?</h2>
		<div class="prose prose-slate mt-5 max-w-none font-serif text-[17px] leading-[1.7] text-ink-700">
			<p>
				<strong>PluMA</strong> — Plugin-Based Microbiome Analysis — is a pipeline framework from the
				BioRG group at Florida International University. It began as a microbiome-analysis tool and
				has grown into a general-purpose environment for constructing lightweight, composable,
				reproducible bioinformatics pipelines.
			</p>
			<p>
				A PluMA pipeline is a sequence of <em>plugins</em>, each a self-contained stage authored in a
				language of the researcher's choosing. The core engine discovers and loads plugins on the
				fly, so stages in C++, Python, Perl, R, or Java can be freely combined within a single
				workflow. New algorithms can be dropped in, tested, and benchmarked without modifying the
				core — and plugins developed by others can be reused across projects without porting.
			</p>
		</div>
	</header>
</section>

<section class="border-y border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<header class="mb-12 max-w-2xl">
			<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
				Design Principles
			</p>
			<h2 class="mt-3 font-serif text-3xl font-semibold text-primary-900">
				Why researchers choose PluMA
			</h2>
		</header>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature (feature.title)}
				<article class="border-l-2 border-ink-200 pl-5 transition hover:border-accent-500">
					<div class="mb-3 text-primary-700">
						<i class="fas {feature.icon} text-2xl"></i>
					</div>
					<h3 class="font-serif text-xl font-semibold text-primary-900">{feature.title}</h3>
					<p class="mt-2 text-[15px] leading-relaxed text-ink-700">{@html feature.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="grid gap-10 md:grid-cols-[2fr_1fr]">
		<div>
			<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
				Citation
			</p>
			<h2 class="mt-3 font-serif text-3xl font-semibold text-primary-900">
				How to cite PluMA
			</h2>
			{#if keyPaper}
				<figure class="mt-6 border-l-2 border-accent-500 pl-6">
					<p class="font-serif text-lg leading-[1.7] text-ink-900">
						{keyPaper.authors} ({keyPaper.year}).
						<em>{keyPaper.title}.</em>
						<span class="not-italic">{keyPaper.venue}</span>
						{#if keyPaper.volume}<span>, {keyPaper.volume}({keyPaper.issue})</span>{/if}
						{#if keyPaper.pages}: {keyPaper.pages}{/if}.
					</p>
					{#if keyPaper.doi}
						<p class="mt-3 font-mono text-xs text-ink-500" data-ui>
							DOI:
							<a
								href={keyPaper.url ?? `https://doi.org/${keyPaper.doi}`}
								target="_blank"
								rel="noopener"
								class="text-primary-700 hover:underline">{keyPaper.doi}</a
							>
						</p>
					{/if}
				</figure>
			{/if}
		</div>
		<aside class="rounded-sm border border-ink-200 bg-white p-6">
			<h3 class="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink-500" data-ui>
				Quick Links
			</h3>
			<ul class="mt-4 space-y-3 text-sm">
				<li>
					<a
						href="https://github.com/FIUBioRG/PluMA"
						target="_blank"
						rel="noopener"
						class="flex items-center gap-3 text-ink-700 hover:text-primary-700"
					>
						<i class="fab fa-github w-4 text-primary-700"></i> Source repository
					</a>
				</li>
				<li>
					<a
						href="https://biorg.cs.fiu.edu/pluma/userguide.pdf"
						target="_blank"
						rel="noopener"
						class="flex items-center gap-3 text-ink-700 hover:text-primary-700"
					>
						<i class="fas fa-file-pdf w-4 text-primary-700"></i> PluMA User Guide
					</a>
				</li>
				<li>
					<a
						href="https://biorg.cs.fiu.edu/pluma/"
						target="_blank"
						rel="noopener"
						class="flex items-center gap-3 text-ink-700 hover:text-primary-700"
					>
						<i class="fas fa-earth-americas w-4 text-primary-700"></i> BioRG PluMA site
					</a>
				</li>
				<li>
					<a
						href="/publications"
						class="flex items-center gap-3 text-ink-700 hover:text-primary-700"
					>
						<i class="fas fa-book w-4 text-primary-700"></i> Related publications
					</a>
				</li>
			</ul>
		</aside>
	</div>
</section>
