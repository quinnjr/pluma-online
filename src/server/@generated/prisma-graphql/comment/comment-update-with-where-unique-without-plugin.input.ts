import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutPluginInput } from './comment-update-without-plugin.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutPluginInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutPluginInput, {nullable:false})
    data!: CommentUpdateWithoutPluginInput;
}
