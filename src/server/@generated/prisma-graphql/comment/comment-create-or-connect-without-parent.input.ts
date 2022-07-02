import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';

@InputType()
export class CommentCreateOrConnectWithoutParentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutParentInput, {nullable:false})
    create!: CommentCreateWithoutParentInput;
}
