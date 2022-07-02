import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationWhereInput } from './registration-where.input';

@ArgsType()
export class DeleteManyRegistrationArgs {

    @Field(() => RegistrationWhereInput, {nullable:true})
    where?: RegistrationWhereInput;
}
