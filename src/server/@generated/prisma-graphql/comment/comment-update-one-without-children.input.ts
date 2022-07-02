import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutChildrenInput } from './comment-create-without-children.input';
import { CommentCreateOrConnectWithoutChildrenInput } from './comment-create-or-connect-without-children.input';
import { CommentUpsertWithoutChildrenInput } from './comment-upsert-without-children.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutChildrenInput } from './comment-update-without-children.input';

@InputType()
export class CommentUpdateOneWithoutChildrenInput {

    @Field(() => CommentCreateWithoutChildrenInput, {nullable:true})
    create?: CommentCreateWithoutChildrenInput;

    @Field(() => CommentCreateOrConnectWithoutChildrenInput, {nullable:true})
    connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput;

    @Field(() => CommentUpsertWithoutChildrenInput, {nullable:true})
    upsert?: CommentUpsertWithoutChildrenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    connect?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutChildrenInput, {nullable:true})
    update?: CommentUpdateWithoutChildrenInput;
}
