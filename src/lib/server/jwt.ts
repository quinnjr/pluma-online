import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { JWT_SECRET } from './env';

export type AuthClaims = JWTPayload & {
	sub: string;
	email: string;
	role: 'Root' | 'Admin' | 'User' | 'Guest';
	tv: number; // tokenVersion
};

const ALG = 'HS256';
const ISSUER = 'pluma-online';
const AUDIENCE = 'pluma-online-web';
const DEFAULT_TTL = '30d';

export async function signAuthToken(claims: {
	userId: number;
	email: string;
	role: AuthClaims['role'];
	tokenVersion: number;
}): Promise<string> {
	if (!JWT_SECRET) throw new Error('JWT secret not configured');
	return await new SignJWT({
		email: claims.email,
		role: claims.role,
		tv: claims.tokenVersion
	})
		.setProtectedHeader({ alg: ALG })
		.setSubject(String(claims.userId))
		.setIssuer(ISSUER)
		.setAudience(AUDIENCE)
		.setIssuedAt()
		.setExpirationTime(DEFAULT_TTL)
		.sign(JWT_SECRET);
}

export async function verifyAuthToken(token: string): Promise<AuthClaims | null> {
	if (!JWT_SECRET) return null;
	try {
		const { payload } = await jwtVerify(token, JWT_SECRET, {
			issuer: ISSUER,
			audience: AUDIENCE
		});
		return payload as AuthClaims;
	} catch {
		return null;
	}
}
