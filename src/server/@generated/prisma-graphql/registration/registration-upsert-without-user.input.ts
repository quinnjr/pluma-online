import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegistrationUpdateWithoutUserInput } from './registration-update-without-user.input';
import { RegistrationCreateWithoutUserInput } from './registration-create-without-user.input';

@InputType()
export class RegistrationUpsertWithoutUserInput {

    @Field(() => RegistrationUpdateWithoutUserInput, {nullable:false})
    update!: RegistrationUpdateWithoutUserInput;

    @Field(() => RegistrationCreateWithoutUserInput, {nullable:false})
    create!: RegistrationCreateWithoutUserInput;
}
