import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRegistrationInput } from './user-update-without-registration.input';
import { UserCreateWithoutRegistrationInput } from './user-create-without-registration.input';

@InputType()
export class UserUpsertWithoutRegistrationInput {

    @Field(() => UserUpdateWithoutRegistrationInput, {nullable:false})
    update!: UserUpdateWithoutRegistrationInput;

    @Field(() => UserCreateWithoutRegistrationInput, {nullable:false})
    create!: UserCreateWithoutRegistrationInput;
}
