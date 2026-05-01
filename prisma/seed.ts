import 'dotenv/config';
import { PrismaClient, PipelineStatus, PersonKind, Role } from '@prisma/client';
import argon2 from 'argon2';
import * as cheerio from 'cheerio';

const db = new PrismaClient();

// Authoritative source for catalogue + project metadata. The HTML structure
// has been stable since 2022:
//   /plugins.html   indexes one HTML page per plugin category (3-col table)
//   /pipelines.html groups pipelines into status sections (2-col tables)
//   /              (home) carries the People and Citations sections
// Override with PLUMA_BASE_URL to point at a staging mirror.
const PLUMA_BASE = (process.env.PLUMA_BASE_URL ?? 'https://biorg.cs.fiu.edu/pluma').replace(
	/\/$/,
	''
);

type RawPlugin = {
	name: string;
	description: string;
	githubUrl: string;
	language: string;
	category: string;
};

type RawPipeline = {
	name: string;
	description: string;
	githubUrl: string;
	status: PipelineStatus;
};

type RawPerson = {
	name: string;
	role: string;
	homepage: string | null;
	kind: PersonKind;
	sortOrder: number;
};

type RawPublication = {
	authors: string;
	year: number;
	title: string;
	venue: string;
	volume?: number;
	issue?: number;
	pages?: string;
};

async function seedCategoriesAndLanguages(plugins: RawPlugin[]) {
	const catNames = [...new Set(plugins.map((p) => p.category))];
	const langNames = [...new Set(plugins.map((p) => p.language))];

	for (const name of catNames) {
		await db.category.upsert({ where: { name }, create: { name }, update: {} });
	}
	for (const name of langNames) {
		await db.language.upsert({ where: { name }, create: { name }, update: {} });
	}

	const cats = Object.fromEntries((await db.category.findMany()).map((c) => [c.name, c.id]));
	const langs = Object.fromEntries((await db.language.findMany()).map((l) => [l.name, l.id]));
	return { cats, langs };
}

async function fetchText(url: string): Promise<string> {
	const r = await fetch(url, { signal: AbortSignal.timeout(20_000) });
	if (!r.ok) throw new Error(`GET ${url} -> ${r.status} ${r.statusText}`);
	return r.text();
}

async function scrapePlugins(): Promise<RawPlugin[]> {
	console.log(`Scraping plugin catalogue from ${PLUMA_BASE}/plugins.html…`);
	const indexHtml = await fetchText(`${PLUMA_BASE}/plugins.html`);
	const $idx = cheerio.load(indexHtml);

	// Category links look like <a href="Assembly.html"><b>Assembly (21)</b></a>.
	// Filter out self-links and anything pointing off this directory.
	const seen = new Set<string>();
	const categories: { slug: string; name: string }[] = [];
	$idx('a[href$=".html"]').each((_, el) => {
		const href = $idx(el).attr('href');
		if (!href || href === 'plugins.html' || href.includes('/')) return;
		const m = $idx(el)
			.text()
			.trim()
			.match(/^(.+?)\s*\(\d+\)\s*$/);
		if (!m || seen.has(href)) return;
		seen.add(href);
		categories.push({ slug: href, name: m[1].trim() });
	});

	if (categories.length === 0) {
		throw new Error(
			`No category links found at ${PLUMA_BASE}/plugins.html — site structure may have changed.`
		);
	}
	console.log(`  ↳ ${categories.length} categories discovered`);

	const pages = await Promise.all(
		categories.map(async (cat) => ({ cat, html: await fetchText(`${PLUMA_BASE}/${cat.slug}`) }))
	);

	const plugins: RawPlugin[] = [];
	let skipped = 0;
	for (const { cat, html } of pages) {
		const $ = cheerio.load(html);
		$('table tr').each((_, tr) => {
			const tds = $(tr).find('td');
			if (tds.length !== 3) return;
			const link = $(tds[0]).find('a').first();
			const name = link.text().trim();
			const githubUrl = (link.attr('href') ?? '').trim();
			const description = $(tds[1]).text().replace(/\s+/g, ' ').trim();
			const language = $(tds[2]).text().trim();
			// Header rows have no <a> in the first cell — name and githubUrl come
			// out empty, so we drop them silently. Anything else with a partial
			// row gets counted as a skip so the operator can investigate.
			if (!name || !githubUrl) return;
			if (!language || !description) {
				skipped++;
				return;
			}
			plugins.push({ name, description, githubUrl, language, category: cat.name });
		});
	}

	if (skipped > 0) console.log(`  ↳ skipped ${skipped} malformed rows`);
	console.log(`  ↳ ${plugins.length} plugins scraped`);
	return plugins;
}

async function seedPlugins() {
	const plugins = await scrapePlugins();
	const { cats, langs } = await seedCategoriesAndLanguages(plugins);

	console.log(`Upserting ${plugins.length} plugins into Postgres…`);
	for (const p of plugins) {
		await db.plugin.upsert({
			where: { name_categoryId: { name: p.name, categoryId: cats[p.category] } },
			create: {
				name: p.name,
				description: p.description,
				githubUrl: p.githubUrl,
				categoryId: cats[p.category],
				languageId: langs[p.language],
				verified: true
			},
			update: {
				description: p.description,
				githubUrl: p.githubUrl,
				languageId: langs[p.language]
			}
		});
	}
	console.log(`  ↳ ${Object.keys(cats).length} categories, ${Object.keys(langs).length} languages`);
}

// Maps the section labels on pipelines.html onto the PipelineStatus enum.
// "Completed, Released" and "Completed, Not Released" both collapse to
// `Completed` — the schema has no separate "released" axis.
function pipelineStatusFromLabel(label: string): PipelineStatus | null {
	const norm = label.toLowerCase();
	if (norm.startsWith('completed')) return PipelineStatus.Completed;
	if (norm.startsWith('in progress')) return PipelineStatus.InProgress;
	if (norm.startsWith('future')) return PipelineStatus.Future;
	return null;
}

async function scrapePipelines(): Promise<RawPipeline[]> {
	console.log(`Scraping pipeline pool from ${PLUMA_BASE}/pipelines.html…`);
	const html = await fetchText(`${PLUMA_BASE}/pipelines.html`);
	const $ = cheerio.load(html);

	// Each section is `<u><b>Status (N)</b></u> ... <table>...</table>`. The <u>
	// and the <table> are siblings under the same content column, so we walk
	// forward from each <u> until we find the table that follows.
	const pipelines: RawPipeline[] = [];
	const seen = new Set<string>();
	$('u').each((_, u) => {
		const m = $(u)
			.text()
			.trim()
			.match(/^(.+?)\s*\(\d+\)$/);
		if (!m) return;
		const status = pipelineStatusFromLabel(m[1]);
		if (!status) return;

		let next = $(u).next();
		while (next.length && !next.is('table')) next = next.next();
		if (!next.length) return;

		next.find('tr').each((_, tr) => {
			const tds = $(tr).find('td');
			if (tds.length !== 2) return;
			const a = $(tds[0]).find('a').first();
			const name = a.text().trim();
			const githubUrl = (a.attr('href') ?? '').trim();
			const description = $(tds[1]).text().replace(/\s+/g, ' ').trim();
			if (!name || !githubUrl || !description) return;
			// Pipeline.name is unique site-wide; first occurrence wins so the
			// "Released" status takes priority over re-listings in other groups.
			if (seen.has(name)) return;
			seen.add(name);
			pipelines.push({ name, description, githubUrl, status });
		});
	});

	if (pipelines.length === 0) {
		throw new Error(
			`No pipeline rows parsed from ${PLUMA_BASE}/pipelines.html — site structure may have changed.`
		);
	}
	console.log(`  ↳ ${pipelines.length} pipelines scraped`);
	return pipelines;
}

async function seedPipelines() {
	const pipelines = await scrapePipelines();
	console.log(`Upserting ${pipelines.length} pipelines into Postgres…`);
	for (const p of pipelines) {
		await db.pipeline.upsert({
			where: { name: p.name },
			create: p,
			update: p
		});
	}
}

// Drop common honorifics so the upsert key matches across re-runs even if
// the live page later gains/loses a "Prof./Dr./Mr." prefix.
function stripHonorific(s: string): string {
	return s.replace(/^(?:Prof|Dr|Mr|Mrs|Ms|Sr|Jr)\.?\s+/, '').trim();
}

function personKindFromRole(role: string): PersonKind {
	const norm = role.toLowerCase();
	if (norm.includes('developer') || norm.includes('engineer') || norm.includes('contributor')) {
		return PersonKind.Contributor;
	}
	if (norm.includes('student')) return PersonKind.Student;
	if (norm.includes('alum')) return PersonKind.Alumni;
	return PersonKind.Faculty;
}

async function scrapeHomeSections(): Promise<{ people: RawPerson[]; pubs: RawPublication[] }> {
	console.log(`Scraping home page from ${PLUMA_BASE}/ for people + citations…`);
	const html = await fetchText(`${PLUMA_BASE}/`);
	const $ = cheerio.load(html);

	const people: RawPerson[] = [];
	const pubs: RawPublication[] = [];

	$('div#bigcolumn').each((_, col) => {
		const heading = $(col).find('h3').first().text().trim();

		if (heading === 'People') {
			let order = 10;
			$(col)
				.find('p')
				.each((_, p) => {
					const role = $(p).find('b').first().text().replace(/:\s*$/, '').trim();
					const link = $(p).find('a').first();
					const rawName = link.text().trim();
					if (!role || !rawName) return;
					const homepage = (link.attr('href') ?? '').trim();
					people.push({
						name: stripHonorific(rawName),
						role,
						homepage: homepage.startsWith('mailto:') ? null : homepage || null,
						kind: personKindFromRole(role),
						sortOrder: order
					});
					order += 10;
				});
		} else if (heading === 'Citations') {
			$(col)
				.find('p')
				.each((_, p) => {
					const $p = $(p);
					const bolds = $p.find('b');
					if (bolds.length < 2) return;
					const authors = $(bolds[0]).text().replace(/\.$/, '').trim();
					const title = $(bolds[1]).text().replace(/[.,]\s*$/, '').trim();
					const venue = $p.find('i').first().text().trim();
					if (!authors || !title || !venue) return;

					const text = $p.text();
					const yearMatch = text.match(/\((\d{4})\)/);
					if (!yearMatch) return;
					const year = Number(yearMatch[1]);

					// "34(17):2881-2888" → volume / issue / pages
					const vipMatch = text.match(/(\d+)\((\d+)\):(\d+(?:[\-–]\d+)?)/);
					const out: RawPublication = { authors, year, title, venue };
					if (vipMatch) {
						out.volume = Number(vipMatch[1]);
						out.issue = Number(vipMatch[2]);
						out.pages = vipMatch[3].replace('-', '–');
					}
					pubs.push(out);
				});
		}
	});

	if (people.length === 0) throw new Error(`No people parsed from ${PLUMA_BASE}/.`);
	if (pubs.length === 0) throw new Error(`No citations parsed from ${PLUMA_BASE}/.`);
	console.log(`  ↳ ${people.length} people, ${pubs.length} citations`);
	return { people, pubs };
}

async function seedPeopleAndPublications() {
	const { people, pubs } = await scrapeHomeSections();

	console.log(`Upserting ${people.length} people…`);
	for (const person of people) {
		const links = person.homepage ? [{ label: 'Homepage', href: person.homepage }] : [];
		const data = {
			role: person.role,
			// The home page does not carry expertise blurbs or portraits; admins
			// can fill these in from the UI without the seed clobbering them.
			expertise: '',
			portrait: '',
			kind: person.kind,
			linksJson: JSON.stringify(links),
			sortOrder: person.sortOrder
		};
		await db.person.upsert({
			where: { name: person.name },
			create: { name: person.name, ...data },
			update: data
		});
	}

	console.log(`Upserting ${pubs.length} publications…`);
	for (const p of pubs) {
		await db.publication.upsert({
			where: { title: p.title },
			create: p,
			update: p
		});
	}
}

async function seedRootUser() {
	const email = (process.env.ROOT_EMAIL ?? '').trim().toLowerCase();
	if (!email) {
		console.log('Skipping Root user seed (ROOT_EMAIL not set).');
		return;
	}
	const existing = await db.user.findUnique({ where: { email } });
	if (existing) {
		console.log(`Root user already exists: ${email}`);
		return;
	}
	const plain = process.env.ROOT_PASSWORD ?? 'ChangeMeNow!';
	const passwordHash = await argon2.hash(plain, { type: argon2.argon2id });

	await db.user.create({
		data: {
			email,
			passwordHash,
			displayName: 'PluMA Root',
			role: Role.Root,
			enabled: true,
			verifiedAt: new Date()
		}
	});
	console.log(`Seeded Root user: ${email} (password: ${plain}) — rotate before deploy.`);
}

async function main() {
	await seedPlugins();
	await seedPipelines();
	await seedPeopleAndPublications();
	await seedRootUser();

	const [plugins, categories, languages, pipelines, people, pubs, users] = await Promise.all([
		db.plugin.count(),
		db.category.count(),
		db.language.count(),
		db.pipeline.count(),
		db.person.count(),
		db.publication.count(),
		db.user.count()
	]);

	console.log('\n──── Seed Summary ────');
	console.log(`  Plugins:      ${plugins}`);
	console.log(`  Categories:   ${categories}`);
	console.log(`  Languages:    ${languages}`);
	console.log(`  Pipelines:    ${pipelines}`);
	console.log(`  People:       ${people}`);
	console.log(`  Publications: ${pubs}`);
	console.log(`  Users:        ${users}`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => db.$disconnect());
