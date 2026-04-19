<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<section class="border-b border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-600" data-ui>
			<i class="fas fa-user-group"></i> &nbsp;People
		</p>
		<h1 class="mt-3 font-serif text-4xl font-semibold text-primary-900 md:text-5xl">
			The team behind PluMA
		</h1>
		<p class="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
			PluMA is developed and maintained by the Bioinformatics Research Group (BioRG) in the School of
			Computing and Information Sciences at Florida International University, with contributions from
			collaborators across biology, medicine, and software engineering.
		</p>
	</div>
</section>

<section class="mx-auto max-w-6xl px-6 py-16">
	<header class="mb-10">
		<h2 class="font-serif text-2xl font-semibold text-primary-900">Faculty &amp; leadership</h2>
		<p class="mt-1 text-sm text-ink-500">
			Principal investigators, project management, and faculty collaborators.
		</p>
	</header>
	<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.faculty as person (person.name)}
			<article class="flex flex-col border-t border-ink-200 pt-6">
				<img
					src={person.portrait}
					alt="Portrait of {person.name}"
					class="h-28 w-28 rounded-full border border-ink-200 object-cover grayscale transition hover:grayscale-0"
					loading="lazy"
					referrerpolicy="no-referrer"
				/>
				<h3 class="mt-5 font-serif text-xl font-semibold text-primary-900">{person.name}</h3>
				<p class="mt-1 font-sans text-[11px] uppercase tracking-[0.14em] text-accent-600" data-ui>
					{person.role}
				</p>
				<p class="mt-3 text-[15px] leading-relaxed text-ink-700">{person.expertise}</p>
				{#if person.links && person.links.length}
					<ul class="mt-4 flex flex-wrap gap-3 text-sm" data-ui>
						{#each person.links as link (link.href)}
							<li>
								<a
									class="inline-flex items-center gap-1.5 text-primary-700 hover:underline"
									href={link.href}
									target="_blank"
									rel="noopener"
								>
									<i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</article>
		{/each}
	</div>
</section>

{#if data.students.length > 0}
	<section class="border-t border-ink-200 bg-white">
		<div class="mx-auto max-w-6xl px-6 py-16">
			<header class="mb-10">
				<h2 class="font-serif text-2xl font-semibold text-primary-900">Students &amp; alumni</h2>
			</header>
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.students as person (person.name)}
					<article class="flex flex-col border-t border-ink-200 pt-6">
						<img
							src={person.portrait}
							alt="Portrait of {person.name}"
							class="h-24 w-24 rounded-full border border-ink-200 object-cover"
							loading="lazy"
							referrerpolicy="no-referrer"
						/>
						<h3 class="mt-4 font-serif text-lg font-semibold text-primary-900">{person.name}</h3>
						<p class="mt-1 font-sans text-[11px] uppercase tracking-[0.14em] text-ink-500" data-ui>
							{person.role}
						</p>
						<p class="mt-2 text-sm leading-relaxed text-ink-700">{person.expertise}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="border-t border-ink-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-16">
		<header class="mb-10">
			<h2 class="font-serif text-2xl font-semibold text-primary-900">Contributors</h2>
			<p class="mt-1 text-sm text-ink-500">
				Developers who have contributed significant work to PluMA and pluma-online under the project
				license.
			</p>
		</header>
		<ul class="divide-y divide-ink-200 border-y border-ink-200">
			{#each data.contributors as person (person.name)}
				<li class="flex items-center gap-6 py-5">
					<img
						src={person.portrait}
						alt="Portrait of {person.name}"
						class="h-14 w-14 rounded-full border border-ink-200 object-cover"
						loading="lazy"
					/>
					<div class="flex-1">
						<p class="font-serif text-lg font-semibold text-primary-900">{person.name}</p>
						<p class="font-sans text-[11px] uppercase tracking-[0.14em] text-accent-600" data-ui>
							{person.role}
						</p>
						<p class="mt-1 text-sm text-ink-700">{person.expertise}</p>
					</div>
					{#if person.links && person.links.length}
						<div class="flex gap-4 text-sm" data-ui>
							{#each person.links as link (link.href)}
								<a
									class="inline-flex items-center gap-1.5 text-primary-700 hover:underline"
									href={link.href}
									target="_blank"
									rel="noopener"
								>
									<i class="fab fa-github"></i>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
		<p class="mt-8 max-w-2xl text-xs leading-relaxed text-ink-500" data-ui>
			Interested in contributing a plugin or patches? Reach out to the project maintainers or open a
			pull request on
			<a
				class="underline"
				href="https://github.com/FIUBioRG/PluMA"
				target="_blank"
				rel="noopener">github.com/FIUBioRG/PluMA</a
			>.
		</p>
	</div>
</section>
