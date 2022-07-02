import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutRegistrationInput } from './user-create-without-registration.input';

@InputType()
export class UserCreateOrConnectWithoutRegistrationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRegistrationInput, {nullable:false})
    create!: UserCreateWithoutRegistrationInput;
}
