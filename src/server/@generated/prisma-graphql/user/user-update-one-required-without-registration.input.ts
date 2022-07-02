import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRegistrationInput } from './user-create-without-registration.input';
import { UserCreateOrConnectWithoutRegistrationInput } from './user-create-or-connect-without-registration.input';
import { UserUpsertWithoutRegistrationInput } from './user-upsert-without-registration.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRegistrationInput } from './user-update-without-registration.input';

@InputType()
export class UserUpdateOneRequiredWithoutRegistrationInput {

    @Field(() => UserCreateWithoutRegistrationInput, {nullable:true})
    create?: UserCreateWithoutRegistrationInput;

    @Field(() => UserCreateOrConnectWithoutRegistrationInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationInput;

    @Field(() => UserUpsertWithoutRegistrationInput, {nullable:true})
    upsert?: UserUpsertWithoutRegistrationInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRegistrationInput, {nullable:true})
    update?: UserUpdateWithoutRegistrationInput;
}
