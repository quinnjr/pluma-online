import { error } from '@sveltejs/kit';
import type { AppAbility, Actions, Subjects } from '$lib/abilities';

/**
 * Enforce a CASL rule or throw a 403. Use this at the top of every +page.server.ts
 * load / action that mutates anything meaningful.
 */
export function enforce(
	ability: AppAbility,
	action: Actions,
	subject: Subjects,
	subjectData?: Record<string, unknown>
): void {
	const subj = subjectData ? ({ __caslSubjectType__: subject, ...subjectData } as unknown) : subject;
	if (!ability.can(action, subj as never)) {
		throw error(403, `Forbidden: cannot ${action} ${subject}`);
	}
}

export function requireLogin<T extends { id: number }>(user: T | null): asserts user is T {
	if (!user) throw error(401, 'Login required');
}
