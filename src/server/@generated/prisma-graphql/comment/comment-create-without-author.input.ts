import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedOneWithoutChildrenInput } from './comment-create-nested-one-without-children.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';
import { PluginCreateNestedOneWithoutCommentsInput } from '../plugin/plugin-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CommentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutChildrenInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CommentCreateNestedManyWithoutParentInput;

    @Field(() => PluginCreateNestedOneWithoutCommentsInput, {nullable:false})
    plugin!: PluginCreateNestedOneWithoutCommentsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
