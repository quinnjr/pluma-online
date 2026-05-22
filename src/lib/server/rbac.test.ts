import { describe, it, expect } from 'vitest';
import { enforce, requireLogin } from './rbac';
import { defineAbilityFor } from '$lib/abilities';

describe('requireLogin', () => {
	it('returns normally for a user with an id', () => {
		expect(() => requireLogin({ id: 1 })).not.toThrow();
	});

	it('throws a 401 for null', () => {
		try {
			requireLogin(null);
			throw new Error('should have thrown');
		} catch (e) {
			expect((e as { status?: number }).status).toBe(401);
		}
	});
});

describe('enforce', () => {
	it('allows a Root user to manage anything', () => {
		const ability = defineAbilityFor({ id: 1, role: 'Root', enabled: true });
		expect(() => enforce(ability, 'manage', 'Plugin')).not.toThrow();
		expect(() => enforce(ability, 'verify', 'User')).not.toThrow();
	});

	it('throws 403 when the ability rejects the action', () => {
		const ability = defineAbilityFor(null); // guest, only `read` on public subjects
		try {
			enforce(ability, 'create', 'Plugin');
			throw new Error('should have thrown');
		} catch (e) {
			expect((e as { status?: number }).status).toBe(403);
		}
	});

	it('honors subjectData conditions (Admin can only verify User-role accounts)', () => {
		const ability = defineAbilityFor({ id: 2, role: 'Admin', enabled: true });
		expect(() => enforce(ability, 'verify', 'User', { role: 'User' })).not.toThrow();
		expect(() => enforce(ability, 'verify', 'User', { role: 'Admin' })).toThrow();
	});
});
