import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}


registerEnumType(Role, { name: 'Role', description: undefined })
