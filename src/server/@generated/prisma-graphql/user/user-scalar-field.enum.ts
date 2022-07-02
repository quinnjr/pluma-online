import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    passwordHash = "passwordHash",
    displayName = "displayName",
    website = "website",
    institution = "institution",
    avatar = "avatar",
    role = "role",
    enabled = "enabled",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
