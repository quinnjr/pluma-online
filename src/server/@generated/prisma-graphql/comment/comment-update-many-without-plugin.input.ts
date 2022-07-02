import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPluginInput } from './comment-create-without-plugin.input';
import { CommentCreateOrConnectWithoutPluginInput } from './comment-create-or-connect-without-plugin.input';
import { CommentUpsertWithWhereUniqueWithoutPluginInput } from './comment-upsert-with-where-unique-without-plugin.input';
import { CommentCreateManyPluginInputEnvelope } from './comment-create-many-plugin-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutPluginInput } from './comment-update-with-where-unique-without-plugin.input';
import { CommentUpdateManyWithWhereWithoutPluginInput } from './comment-update-many-with-where-without-plugin.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutPluginInput {

    @Field(() => [CommentCreateWithoutPluginInput], {nullable:true})
    create?: Array<CommentCreateWithoutPluginInput>;

    @Field(() => [CommentCreateOrConnectWithoutPluginInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPluginInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutPluginInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPluginInput>;

    @Field(() => CommentCreateManyPluginInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyPluginInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutPluginInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutPluginInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutPluginInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPluginInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}
