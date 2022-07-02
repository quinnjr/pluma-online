import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';
import { CommentCreateOrConnectWithoutParentInput } from './comment-create-or-connect-without-parent.input';
import { CommentCreateManyParentInputEnvelope } from './comment-create-many-parent-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutParentInput {

    @Field(() => [CommentCreateWithoutParentInput], {nullable:true})
    create?: Array<CommentCreateWithoutParentInput>;

    @Field(() => [CommentCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentInput>;

    @Field(() => CommentCreateManyParentInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyParentInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}
