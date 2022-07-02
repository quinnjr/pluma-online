import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRegistrationInput } from './user-create-without-registration.input';
import { UserCreateOrConnectWithoutRegistrationInput } from './user-create-or-connect-without-registration.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRegistrationInput {

    @Field(() => UserCreateWithoutRegistrationInput, {nullable:true})
    create?: UserCreateWithoutRegistrationInput;

    @Field(() => UserCreateOrConnectWithoutRegistrationInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
