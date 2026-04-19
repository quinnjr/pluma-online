<script lang="ts">
	const steps = [
		{
			icon: 'fa-download',
			title: 'Clone the repository',
			body: `Clone the PluMA core from GitHub. The build system uses SCons with a lightweight Python configuration layer (<code>build_config.py</code>, <code>build_support.py</code>).`,
			code: `git clone https://github.com/FIUBioRG/PluMA.git
cd PluMA`
		},
		{
			icon: 'fa-hammer',
			title: 'Build PluMA',
			body: `Install the Python requirements, then build with SCons. A <code>Dockerfile</code> is provided if you prefer a containerized build.`,
			code: `pip install -r requirements.txt
scons`
		},
		{
			icon: 'fa-puzzle-piece',
			title: 'Add plugins',
			body: `Drop plugins into the <code>plugins/</code> directory, or point <code>PLUMA_PLUGIN_PATH</code> at a different location. Browse the plugin catalog to find stages for your workflow.`,
			code: `export PLUMA_PLUGIN_PATH=/path/to/plugins`
		},
		{
			icon: 'fa-play',
			title: 'Run a pipeline',
			body: `A pipeline is a configuration file that lists stages in order. Example pipelines live in <code>pipelines/</code> inside the repo.`,
			code: `./pluma pipelines/example.pipeline`
		}
	];
</script>

<section class="border-b border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
			<i class="fas fa-book-open"></i> &nbsp;Getting Started
		</p>
		<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900 md:text-5xl">
			Install, build, and run your first pipeline
		</h1>
		<p class="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
			PluMA's core is small and its plugin model keeps installations lightweight — you only pull in
			the stages your pipeline actually needs.
		</p>
	</div>
</section>

<section class="mx-auto max-w-4xl px-6 py-16">
	<ol class="space-y-12">
		{#each steps as step, i (step.title)}
			<li class="grid gap-6 md:grid-cols-[64px_1fr]">
				<div
					class="flex h-14 w-14 items-center justify-center rounded-full border border-ink-200 bg-white text-primary-700"
				>
					<i class="fas {step.icon} text-xl"></i>
				</div>
				<div>
					<p class="font-sans text-[11px] uppercase tracking-[0.18em] text-ink-500" data-ui>
						Step {i + 1}
					</p>
					<h2 class="mt-1 font-serif text-2xl font-semibold text-primary-900">{step.title}</h2>
					<div class="prose prose-slate mt-3 max-w-none font-serif text-[16px] leading-[1.7] text-ink-700">
						<p>{@html step.body}</p>
					</div>
					<pre
						class="mt-4 overflow-x-auto rounded-sm border border-ink-200 bg-ink-900 p-4 text-xs leading-relaxed text-ink-100"><code
							>{step.code}</code
						></pre>
				</div>
			</li>
		{/each}
	</ol>

	<aside class="mt-16 rounded-sm border border-ink-200 bg-white p-8">
		<h3 class="font-serif text-xl font-semibold text-primary-900">Further reading</h3>
		<ul class="mt-4 space-y-3 text-sm" data-ui>
			<li>
				<a
					class="flex items-center gap-3 text-ink-700 hover:text-primary-700"
					href="https://biorg.cs.fiu.edu/pluma/userguide.pdf"
					target="_blank"
					rel="noopener"
				>
					<i class="fas fa-file-pdf w-4 text-primary-700"></i> PluMA User Guide (PDF)
				</a>
			</li>
			<li>
				<a
					class="flex items-center gap-3 text-ink-700 hover:text-primary-700"
					href="https://github.com/FIUBioRG/PluMA"
					target="_blank"
					rel="noopener"
				>
					<i class="fab fa-github w-4 text-primary-700"></i> Source code &amp; issues
				</a>
			</li>
			<li>
				<a class="flex items-center gap-3 text-ink-700 hover:text-primary-700" href="/plugins">
					<i class="fas fa-puzzle-piece w-4 text-primary-700"></i> Browse the plugin catalog
				</a>
			</li>
		</ul>
	</aside>
</section>
