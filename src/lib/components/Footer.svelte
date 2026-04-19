<script lang="ts">
	import { funders } from '$lib/data/funding';
	const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-ink-200 bg-white/60">
	<div class="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
		<div class="md:col-span-2">
			<div class="flex items-center gap-3">
				<span
					class="flex h-9 w-9 items-center justify-center rounded-sm bg-primary-700 font-serif text-lg font-semibold text-white"
					>P</span
				>
				<span class="font-serif text-base font-semibold text-primary-900">PluMA</span>
			</div>
			<p class="mt-4 max-w-md text-sm leading-relaxed text-ink-700">
				Plugin-Based Microbiome Analysis is a lightweight, language-agnostic pipeline framework
				developed by the Bioinformatics Research Group (BioRG) at Florida International University.
			</p>
			<p class="mt-4 text-xs text-ink-500" data-ui>
				© {year} Bioinformatics Research Group · School of Computing and Information Sciences · FIU
			</p>
		</div>

		<div data-ui>
			<h4 class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
				Project
			</h4>
			<ul class="mt-3 space-y-2 text-sm">
				<li>
					<a class="text-ink-700 hover:text-primary-700" href="/plugins">Plugin Catalog</a>
				</li>
				<li>
					<a class="text-ink-700 hover:text-primary-700" href="/pipelines">Pipeline Pool</a>
				</li>
				<li>
					<a class="text-ink-700 hover:text-primary-700" href="/getting-started">Getting Started</a>
				</li>
				<li>
					<a class="text-ink-700 hover:text-primary-700" href="/publications">Publications</a>
				</li>
				<li>
					<a
						class="text-ink-700 hover:text-primary-700"
						href="https://biorg.cs.fiu.edu/pluma/userguide.pdf"
						target="_blank"
						rel="noopener">User Guide (PDF)</a
					>
				</li>
			</ul>
		</div>

		<div data-ui>
			<h4 class="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
				Funding
			</h4>
			<ul class="mt-3 space-y-1.5 text-xs leading-relaxed text-ink-500">
				{#each funders as f (f)}
					<li>{f}</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
