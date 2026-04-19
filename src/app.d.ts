// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { User } from '@prisma/client';
import type { AppAbility } from '$lib/abilities';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null;
			ability: AppAbility;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
