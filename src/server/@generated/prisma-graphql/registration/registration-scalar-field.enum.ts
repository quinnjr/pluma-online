import { registerEnumType } from '@nestjs/graphql';

export enum RegistrationScalarFieldEnum {
    id = "id",
    userId = "userId",
    code = "code"
}


registerEnumType(RegistrationScalarFieldEnum, { name: 'RegistrationScalarFieldEnum', description: undefined })
