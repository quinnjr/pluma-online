import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutParentInput } from './comment-create-without-parent.input';
import { CommentCreateOrConnectWithoutParentInput } from './comment-create-or-connect-without-parent.input';
import { CommentUpsertWithWhereUniqueWithoutParentInput } from './comment-upsert-with-where-unique-without-parent.input';
import { CommentCreateManyParentInputEnvelope } from './comment-create-many-parent-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutParentInput } from './comment-update-with-where-unique-without-parent.input';
import { CommentUpdateManyWithWhereWithoutParentInput } from './comment-update-many-with-where-without-parent.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutParentInput {

    @Field(() => [CommentCreateWithoutParentInput], {nullable:true})
    create?: Array<CommentCreateWithoutParentInput>;

    @Field(() => [CommentCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => CommentCreateManyParentInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyParentInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}
