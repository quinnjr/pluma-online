import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPluginsInput } from './user-create-without-plugins.input';
import { UserCreateOrConnectWithoutPluginsInput } from './user-create-or-connect-without-plugins.input';
import { UserUpsertWithoutPluginsInput } from './user-upsert-without-plugins.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPluginsInput } from './user-update-without-plugins.input';

@InputType()
export class UserUpdateOneWithoutPluginsInput {

    @Field(() => UserCreateWithoutPluginsInput, {nullable:true})
    create?: UserCreateWithoutPluginsInput;

    @Field(() => UserCreateOrConnectWithoutPluginsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPluginsInput;

    @Field(() => UserUpsertWithoutPluginsInput, {nullable:true})
    upsert?: UserUpsertWithoutPluginsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPluginsInput, {nullable:true})
    update?: UserUpdateWithoutPluginsInput;
}
