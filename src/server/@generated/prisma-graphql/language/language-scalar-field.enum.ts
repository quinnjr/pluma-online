import { registerEnumType } from '@nestjs/graphql';

export enum LanguageScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
