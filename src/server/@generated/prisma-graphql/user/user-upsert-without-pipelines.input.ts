import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPipelinesInput } from './user-update-without-pipelines.input';
import { UserCreateWithoutPipelinesInput } from './user-create-without-pipelines.input';

@InputType()
export class UserUpsertWithoutPipelinesInput {

    @Field(() => UserUpdateWithoutPipelinesInput, {nullable:false})
    update!: UserUpdateWithoutPipelinesInput;

    @Field(() => UserCreateWithoutPipelinesInput, {nullable:false})
    create!: UserCreateWithoutPipelinesInput;
}
