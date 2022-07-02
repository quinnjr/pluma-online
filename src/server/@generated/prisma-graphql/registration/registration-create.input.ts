import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRegistrationInput } from '../user/user-create-nested-one-without-registration.input';

@InputType()
export class RegistrationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutRegistrationInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRegistrationInput;

    @Field(() => String, {nullable:false})
    code!: string;
}
