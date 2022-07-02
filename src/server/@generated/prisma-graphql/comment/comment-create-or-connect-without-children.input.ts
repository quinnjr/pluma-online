import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutChildrenInput } from './comment-create-without-children.input';

@InputType()
export class CommentCreateOrConnectWithoutChildrenInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutChildrenInput, {nullable:false})
    create!: CommentCreateWithoutChildrenInput;
}
