import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutPipelinesInput } from './user-create-without-pipelines.input';

@InputType()
export class UserCreateOrConnectWithoutPipelinesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPipelinesInput, {nullable:false})
    create!: UserCreateWithoutPipelinesInput;
}
