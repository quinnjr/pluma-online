import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPipelinesInput } from './user-create-without-pipelines.input';
import { UserCreateOrConnectWithoutPipelinesInput } from './user-create-or-connect-without-pipelines.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPipelinesInput {

    @Field(() => UserCreateWithoutPipelinesInput, {nullable:true})
    create?: UserCreateWithoutPipelinesInput;

    @Field(() => UserCreateOrConnectWithoutPipelinesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPipelinesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
