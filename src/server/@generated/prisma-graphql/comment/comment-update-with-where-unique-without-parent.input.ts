import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutParentInput } from './comment-update-without-parent.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutParentInput, {nullable:false})
    data!: CommentUpdateWithoutParentInput;
}
