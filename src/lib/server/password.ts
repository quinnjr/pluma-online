import argon2 from 'argon2';

const OPTIONS: argon2.Options = {
	type: argon2.argon2id,
	memoryCost: 19 * 1024,
	timeCost: 2,
	parallelism: 1
};

export function hashPassword(plain: string): Promise<string> {
	return argon2.hash(plain, OPTIONS);
}

export function verifyPassword(hash: string, plain: string): Promise<boolean> {
	return argon2.verify(hash, plain);
}
