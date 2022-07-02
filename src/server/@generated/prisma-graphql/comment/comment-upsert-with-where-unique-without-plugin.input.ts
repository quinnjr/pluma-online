import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutPluginInput } from './comment-update-without-plugin.input';
import { CommentCreateWithoutPluginInput } from './comment-create-without-plugin.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutPluginInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutPluginInput, {nullable:false})
    update!: CommentUpdateWithoutPluginInput;

    @Field(() => CommentCreateWithoutPluginInput, {nullable:false})
    create!: CommentCreateWithoutPluginInput;
}
