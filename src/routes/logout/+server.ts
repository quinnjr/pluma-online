import { redirect } from '@sveltejs/kit';
import { clearAuthCookie } from '$lib/server/auth';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
	clearAuthCookie(cookies);
	throw redirect(303, '/');
};

export const GET: RequestHandler = async ({ cookies }) => {
	clearAuthCookie(cookies);
	throw redirect(303, '/');
};
