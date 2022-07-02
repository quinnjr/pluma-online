import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutParentInput } from './comment-update-without-parent.input';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutParentInput, {nullable:false})
    update!: CommentUpdateWithoutParentInput;

    @Field(() => CommentCreateWithoutParentInput, {nullable:false})
    create!: CommentCreateWithoutParentInput;
}
