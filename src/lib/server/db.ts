import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

declare global {
	// eslint-disable-next-line no-var
	var __prisma: PrismaClient | undefined;
}

export const db =
	globalThis.__prisma ??
	new PrismaClient({
		log: dev ? ['warn', 'error'] : ['error']
	});

if (dev) globalThis.__prisma = db;
