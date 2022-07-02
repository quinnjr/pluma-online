import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPluginInput } from './comment-create-without-plugin.input';
import { CommentCreateOrConnectWithoutPluginInput } from './comment-create-or-connect-without-plugin.input';
import { CommentCreateManyPluginInputEnvelope } from './comment-create-many-plugin-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutPluginInput {

    @Field(() => [CommentCreateWithoutPluginInput], {nullable:true})
    create?: Array<CommentCreateWithoutPluginInput>;

    @Field(() => [CommentCreateOrConnectWithoutPluginInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPluginInput>;

    @Field(() => CommentCreateManyPluginInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyPluginInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}
