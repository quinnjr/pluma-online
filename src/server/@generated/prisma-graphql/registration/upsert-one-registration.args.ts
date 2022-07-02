import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';
import { RegistrationCreateInput } from './registration-create.input';
import { RegistrationUpdateInput } from './registration-update.input';

@ArgsType()
export class UpsertOneRegistrationArgs {

    @Field(() => RegistrationWhereUniqueInput, {nullable:false})
    where!: RegistrationWhereUniqueInput;

    @Field(() => RegistrationCreateInput, {nullable:false})
    create!: RegistrationCreateInput;

    @Field(() => RegistrationUpdateInput, {nullable:false})
    update!: RegistrationUpdateInput;
}
