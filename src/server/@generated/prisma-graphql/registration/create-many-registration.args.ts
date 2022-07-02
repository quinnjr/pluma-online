import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationCreateManyInput } from './registration-create-many.input';

@ArgsType()
export class CreateManyRegistrationArgs {

    @Field(() => [RegistrationCreateManyInput], {nullable:false})
    data!: Array<RegistrationCreateManyInput>;
}
