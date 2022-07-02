import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateWithoutChildrenInput } from './comment-update-without-children.input';
import { CommentCreateWithoutChildrenInput } from './comment-create-without-children.input';

@InputType()
export class CommentUpsertWithoutChildrenInput {

    @Field(() => CommentUpdateWithoutChildrenInput, {nullable:false})
    update!: CommentUpdateWithoutChildrenInput;

    @Field(() => CommentCreateWithoutChildrenInput, {nullable:false})
    create!: CommentCreateWithoutChildrenInput;
}
