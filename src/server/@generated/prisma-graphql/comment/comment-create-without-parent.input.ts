import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';
import { PluginCreateNestedOneWithoutCommentsInput } from '../plugin/plugin-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutParentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CommentCreateNestedManyWithoutParentInput;

    @Field(() => PluginCreateNestedOneWithoutCommentsInput, {nullable:false})
    plugin!: PluginCreateNestedOneWithoutCommentsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
