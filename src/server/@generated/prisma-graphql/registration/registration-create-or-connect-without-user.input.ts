import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';
import { RegistrationCreateWithoutUserInput } from './registration-create-without-user.input';

@InputType()
export class RegistrationCreateOrConnectWithoutUserInput {

    @Field(() => RegistrationWhereUniqueInput, {nullable:false})
    where!: RegistrationWhereUniqueInput;

    @Field(() => RegistrationCreateWithoutUserInput, {nullable:false})
    create!: RegistrationCreateWithoutUserInput;
}
