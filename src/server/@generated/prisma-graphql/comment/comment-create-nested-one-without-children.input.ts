import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutChildrenInput } from './comment-create-without-children.input';
import { CommentCreateOrConnectWithoutChildrenInput } from './comment-create-or-connect-without-children.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedOneWithoutChildrenInput {

    @Field(() => CommentCreateWithoutChildrenInput, {nullable:true})
    create?: CommentCreateWithoutChildrenInput;

    @Field(() => CommentCreateOrConnectWithoutChildrenInput, {nullable:true})
    connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    connect?: CommentWhereUniqueInput;
}
