import { describe, it, expect } from 'vitest';
import { defineAbilityFor, serializeAbility, hydrateAbility } from './abilities';

describe('defineAbilityFor', () => {
	it('guests can read public subjects but not write them', () => {
		const a = defineAbilityFor(null);
		expect(a.can('read', 'Plugin')).toBe(true);
		expect(a.can('read', 'Pipeline')).toBe(true);
		expect(a.can('read', 'Person')).toBe(true);
		expect(a.can('create', 'Plugin')).toBe(false);
		expect(a.can('update', 'Pipeline')).toBe(false);
		expect(a.can('delete', 'Person')).toBe(false);
	});

	it('disabled users are treated as guests', () => {
		const a = defineAbilityFor({ id: 1, role: 'Admin', enabled: false });
		expect(a.can('manage', 'Plugin')).toBe(false);
		expect(a.can('read', 'Plugin')).toBe(true);
	});

	it('User role gets no write access', () => {
		const a = defineAbilityFor({ id: 1, role: 'User', enabled: true });
		expect(a.can('create', 'Plugin')).toBe(false);
		expect(a.can('read', 'Plugin')).toBe(true);
	});

	it('Admin can manage content subjects but not User accounts', () => {
		const a = defineAbilityFor({ id: 1, role: 'Admin', enabled: true });
		expect(a.can('manage', 'Plugin')).toBe(true);
		expect(a.can('manage', 'Pipeline')).toBe(true);
		expect(a.can('manage', 'Person')).toBe(true);
		expect(a.can('manage', 'Category')).toBe(true);
		expect(a.can('manage', 'Language')).toBe(true);
		expect(a.can('read', 'User')).toBe(true);
		expect(a.can('manage', 'User')).toBe(false);
		expect(a.can('promote', 'User')).toBe(false);
	});

	it('Admin can verify only User-role accounts, not Admins/Root', () => {
		const a = defineAbilityFor({ id: 1, role: 'Admin', enabled: true });
		expect(a.can('verify', { __caslSubjectType__: 'User', role: 'User' } as never)).toBe(true);
		expect(a.can('verify', { __caslSubjectType__: 'User', role: 'Admin' } as never)).toBe(false);
		expect(a.can('verify', { __caslSubjectType__: 'User', role: 'Root' } as never)).toBe(false);
	});

	it('Root has unrestricted access', () => {
		const a = defineAbilityFor({ id: 1, role: 'Root', enabled: true });
		expect(a.can('manage', 'all')).toBe(true);
		expect(a.can('promote', 'User')).toBe(true);
		expect(a.can('verify', 'User')).toBe(true);
	});
});

describe('serialize / hydrate', () => {
	it('round-trips ability rules', () => {
		const original = defineAbilityFor({ id: 1, role: 'Admin', enabled: true });
		const rules = serializeAbility(original);
		const restored = hydrateAbility(rules);
		expect(restored.can('manage', 'Plugin')).toBe(true);
		expect(restored.can('manage', 'User')).toBe(false);
	});

	it('serialized rules are JSON-safe', () => {
		const rules = serializeAbility(defineAbilityFor({ id: 1, role: 'Admin', enabled: true }));
		expect(() => JSON.parse(JSON.stringify(rules))).not.toThrow();
	});
});
