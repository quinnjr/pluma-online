import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
