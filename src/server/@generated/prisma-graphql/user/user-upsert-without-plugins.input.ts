import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPluginsInput } from './user-update-without-plugins.input';
import { UserCreateWithoutPluginsInput } from './user-create-without-plugins.input';

@InputType()
export class UserUpsertWithoutPluginsInput {

    @Field(() => UserUpdateWithoutPluginsInput, {nullable:false})
    update!: UserUpdateWithoutPluginsInput;

    @Field(() => UserCreateWithoutPluginsInput, {nullable:false})
    create!: UserCreateWithoutPluginsInput;
}
