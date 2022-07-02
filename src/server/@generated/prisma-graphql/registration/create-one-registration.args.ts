import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationCreateInput } from './registration-create.input';

@ArgsType()
export class CreateOneRegistrationArgs {

    @Field(() => RegistrationCreateInput, {nullable:false})
    data!: RegistrationCreateInput;
}
