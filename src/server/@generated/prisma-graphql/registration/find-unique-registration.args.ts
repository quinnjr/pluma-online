import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';

@ArgsType()
export class FindUniqueRegistrationArgs {

    @Field(() => RegistrationWhereUniqueInput, {nullable:false})
    where!: RegistrationWhereUniqueInput;
}
