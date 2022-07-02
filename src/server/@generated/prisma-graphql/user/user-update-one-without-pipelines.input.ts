import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPipelinesInput } from './user-create-without-pipelines.input';
import { UserCreateOrConnectWithoutPipelinesInput } from './user-create-or-connect-without-pipelines.input';
import { UserUpsertWithoutPipelinesInput } from './user-upsert-without-pipelines.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPipelinesInput } from './user-update-without-pipelines.input';

@InputType()
export class UserUpdateOneWithoutPipelinesInput {

    @Field(() => UserCreateWithoutPipelinesInput, {nullable:true})
    create?: UserCreateWithoutPipelinesInput;

    @Field(() => UserCreateOrConnectWithoutPipelinesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPipelinesInput;

    @Field(() => UserUpsertWithoutPipelinesInput, {nullable:true})
    upsert?: UserUpsertWithoutPipelinesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPipelinesInput, {nullable:true})
    update?: UserUpdateWithoutPipelinesInput;
}
