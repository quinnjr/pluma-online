import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegistrationCreateWithoutUserInput } from './registration-create-without-user.input';
import { RegistrationCreateOrConnectWithoutUserInput } from './registration-create-or-connect-without-user.input';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';

@InputType()
export class RegistrationCreateNestedOneWithoutUserInput {

    @Field(() => RegistrationCreateWithoutUserInput, {nullable:true})
    create?: RegistrationCreateWithoutUserInput;

    @Field(() => RegistrationCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput;

    @Field(() => RegistrationWhereUniqueInput, {nullable:true})
    connect?: RegistrationWhereUniqueInput;
}
