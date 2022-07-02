import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutChildrenInput } from './comment-create-nested-one-without-children.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutPluginInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CommentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutChildrenInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CommentCreateNestedManyWithoutParentInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
