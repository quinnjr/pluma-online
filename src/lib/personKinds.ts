// Mirrors the PersonKind enum in prisma/schema.prisma. Kept client-safe so
// browser components don't have to import @prisma/client just for an enum.
export const PERSON_KINDS = ['Faculty', 'Student', 'Contributor', 'Alumni'] as const;
export type PersonKind = (typeof PERSON_KINDS)[number];
