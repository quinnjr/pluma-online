import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegistrationCreateWithoutUserInput } from './registration-create-without-user.input';
import { RegistrationCreateOrConnectWithoutUserInput } from './registration-create-or-connect-without-user.input';
import { RegistrationUpsertWithoutUserInput } from './registration-upsert-without-user.input';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';
import { RegistrationUpdateWithoutUserInput } from './registration-update-without-user.input';

@InputType()
export class RegistrationUpdateOneWithoutUserInput {

    @Field(() => RegistrationCreateWithoutUserInput, {nullable:true})
    create?: RegistrationCreateWithoutUserInput;

    @Field(() => RegistrationCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput;

    @Field(() => RegistrationUpsertWithoutUserInput, {nullable:true})
    upsert?: RegistrationUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RegistrationWhereUniqueInput, {nullable:true})
    connect?: RegistrationWhereUniqueInput;

    @Field(() => RegistrationUpdateWithoutUserInput, {nullable:true})
    update?: RegistrationUpdateWithoutUserInput;
}
