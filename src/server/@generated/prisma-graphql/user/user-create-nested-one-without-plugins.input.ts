import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPluginsInput } from './user-create-without-plugins.input';
import { UserCreateOrConnectWithoutPluginsInput } from './user-create-or-connect-without-plugins.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPluginsInput {

    @Field(() => UserCreateWithoutPluginsInput, {nullable:true})
    create?: UserCreateWithoutPluginsInput;

    @Field(() => UserCreateOrConnectWithoutPluginsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPluginsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
