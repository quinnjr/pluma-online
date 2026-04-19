import { AbilityBuilder, createMongoAbility, type MongoAbility } from '@casl/ability';

// Untyped MongoAbility avoids CASL condition type constraints on `can()`.
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'verify' | 'promote';

export type Subjects =
	| 'all'
	| 'User'
	| 'Plugin'
	| 'Pipeline'
	| 'Publication'
	| 'Person'
	| 'Category'
	| 'Language';

export type AppAbility = MongoAbility;

export type CurrentUser = {
	id: number;
	role: 'Root' | 'Admin' | 'User' | 'Guest';
	enabled: boolean;
} | null;

export function defineAbilityFor(user: CurrentUser): AppAbility {
	const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

	can('read', ['Plugin', 'Pipeline', 'Publication', 'Person', 'Category', 'Language']);

	if (user && user.enabled) {
		if (user.role === 'Root') {
			can('manage', 'all');
			can('verify', 'User');
			can('promote', 'User');
		} else if (user.role === 'Admin') {
			can('manage', ['Plugin', 'Pipeline', 'Publication', 'Person', 'Category', 'Language']);
			can('read', 'User');
			// Admins can only verify User-role accounts; not Admins or Root.
			can('verify', 'User', { role: 'User' });
		}
	}

	return build();
}

export function serializeAbility(ability: AppAbility) {
	return ability.rules;
}

export function hydrateAbility(rules: AppAbility['rules']): AppAbility {
	return createMongoAbility(rules);
}
