import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRegistrationInput } from '../user/user-update-one-required-without-registration.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class RegistrationUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutRegistrationInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRegistrationInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;
}
