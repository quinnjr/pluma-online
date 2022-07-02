import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationUpdateManyMutationInput } from './registration-update-many-mutation.input';
import { RegistrationWhereInput } from './registration-where.input';

@ArgsType()
export class UpdateManyRegistrationArgs {

    @Field(() => RegistrationUpdateManyMutationInput, {nullable:false})
    data!: RegistrationUpdateManyMutationInput;

    @Field(() => RegistrationWhereInput, {nullable:true})
    where?: RegistrationWhereInput;
}
