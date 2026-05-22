export const env = new Proxy({} as Record<string, string | undefined>, {
	get(_, key: string) {
		return process.env[key];
	},
	has(_, key: string) {
		return key in process.env;
	},
	ownKeys() {
		return Object.keys(process.env);
	},
	getOwnPropertyDescriptor(_, key: string) {
		return { enumerable: true, configurable: true, value: process.env[key as string] };
	}
});
