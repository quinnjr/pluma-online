import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutPluginInput } from './comment-create-without-plugin.input';

@InputType()
export class CommentCreateOrConnectWithoutPluginInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutPluginInput, {nullable:false})
    create!: CommentCreateWithoutPluginInput;
}
