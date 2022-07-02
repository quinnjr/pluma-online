import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPluginsInput } from './user-create-without-plugins.input';

@InputType()
export class UserCreateOrConnectWithoutPluginsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPluginsInput, {nullable:false})
    create!: UserCreateWithoutPluginsInput;
}
