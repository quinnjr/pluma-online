import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationUpdateInput } from './registration-update.input';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';

@ArgsType()
export class UpdateOneRegistrationArgs {

    @Field(() => RegistrationUpdateInput, {nullable:false})
    data!: RegistrationUpdateInput;

    @Field(() => RegistrationWhereUniqueInput, {nullable:false})
    where!: RegistrationWhereUniqueInput;
}
