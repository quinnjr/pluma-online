import 'dotenv/config';
import { PrismaClient, PipelineStatus, PersonKind, Role } from '@prisma/client';
import argon2 from 'argon2';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new PrismaClient();

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
	status: 'Completed' | 'InProgress' | 'Future';
};

function loadJson<T>(rel: string): T {
	const path = join(__dirname, '..', 'src', 'lib', 'data', rel);
	return JSON.parse(readFileSync(path, 'utf-8')) as T;
}

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

async function seedPlugins() {
	const plugins = loadJson<RawPlugin[]>('plugins.json');
	const { cats, langs } = await seedCategoriesAndLanguages(plugins);

	console.log(`Seeding ${plugins.length} plugins…`);
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

async function seedPipelines() {
	const pipelines = loadJson<RawPipeline[]>('pipelines.json');
	console.log(`Seeding ${pipelines.length} pipelines…`);
	for (const p of pipelines) {
		await db.pipeline.upsert({
			where: { name: p.name },
			create: {
				name: p.name,
				description: p.description,
				githubUrl: p.githubUrl,
				status: PipelineStatus[p.status]
			},
			update: {
				description: p.description,
				githubUrl: p.githubUrl,
				status: PipelineStatus[p.status]
			}
		});
	}
}

async function seedPeople() {
	const faculty = [
		{
			name: 'Giri Narasimhan',
			role: 'Principal Investigator · Professor of Computer Science',
			expertise: 'Microbiomes and general bioinformatics',
			portrait: 'https://biorg.cs.fiu.edu/images/photos/me.jpg',
			kind: PersonKind.Faculty,
			links: [{ label: 'Homepage', href: 'https://users.cis.fiu.edu/~giri/' }],
			sortOrder: 10
		},
		{
			name: 'Trevor Cickovski',
			role: 'Project Manager · Faculty in Computer Science',
			expertise: 'Software engineering and scientific pipelines',
			portrait: 'https://biorg.cs.fiu.edu/images/photos/trevor.jpg',
			kind: PersonKind.Faculty,
			sortOrder: 20
		},
		{
			name: 'Kalai Mathee',
			role: 'Professor, College of Medicine · ASM Fellow',
			expertise: 'Transcription & antibiotic resistance',
			portrait: 'https://biorg.cs.fiu.edu/images/photos/kalai2.jpg',
			kind: PersonKind.Faculty,
			sortOrder: 30
		},
		{
			name: 'Ananda Mondal',
			role: 'Faculty in Computer Science',
			expertise: 'Epigenetics & cancer genomics',
			portrait:
				'https://i0.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/08/ananda-mondal.jpg?zoom=2&fit=128%2C128&ssl=1',
			kind: PersonKind.Faculty,
			sortOrder: 40
		}
	];

	const contributors = [
		{
			name: 'Joseph R. Quinn',
			role: 'Senior Developer',
			expertise: 'Web platform, data infrastructure, plugin tooling',
			portrait: '/images/blank-profile-picture.webp',
			kind: PersonKind.Contributor,
			links: [{ label: 'GitHub', href: 'https://github.com/quinnjr' }],
			sortOrder: 100
		}
	];

	const all = [...faculty, ...contributors];
	console.log(`Seeding ${all.length} people…`);
	for (const person of all) {
		await db.person.upsert({
			where: { name: person.name },
			create: {
				name: person.name,
				role: person.role,
				expertise: person.expertise,
				portrait: person.portrait,
				kind: person.kind,
				linksJson: JSON.stringify(person.links ?? []),
				sortOrder: person.sortOrder
			},
			update: {
				role: person.role,
				expertise: person.expertise,
				portrait: person.portrait,
				kind: person.kind,
				linksJson: JSON.stringify(person.links ?? []),
				sortOrder: person.sortOrder
			}
		});
	}
}

async function seedPublications() {
	const pubs = [
		{
			authors: 'Cickovski, T., Narasimhan, G.',
			year: 2018,
			title:
				'Constructing lightweight and flexible pipelines using Plugin-Based Microbiome Analysis (PluMA)',
			venue: 'Bioinformatics',
			volume: 34,
			issue: 17,
			pages: '2881–2888',
			doi: '10.1093/bioinformatics/bty198',
			url: 'https://academic.oup.com/bioinformatics/article/34/17/2881/4956349'
		},
		{
			authors: 'Cickovski, T., Flor, M., Irvin, G., Buchs, I., Mathee, K., Narasimhan, G.',
			year: 2016,
			title: 'Lightweight Microbiome Analysis Pipelines',
			venue: 'IWBBIO 2016 Proceedings',
			pages: 'Granada, Spain'
		},
		{
			authors: 'Valdes, Stebliankin, Ruiz-Perez, Park, Lee, Narasimhan',
			year: 2022,
			title: 'Microbiome Maps: Hilbert Curve Visualizations of Metagenomic Profiles',
			venue: 'BioVis COSI at ISMB 2022'
		},
		{
			authors: 'Cai, Narasimhan, Skums',
			year: 2021,
			title:
				"Guest Editors' Introduction to the Special Section on Bioinformatics Research and Applications",
			venue: 'IEEE Trans Comput Biol and Bioinf',
			volume: 19,
			issue: 1,
			pages: '207–208',
			doi: '10.1109/TCBB.2021.3121736'
		}
	];

	console.log(`Seeding ${pubs.length} publications…`);
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
	await seedPeople();
	await seedPublications();
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
