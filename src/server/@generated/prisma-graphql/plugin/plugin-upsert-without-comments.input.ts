import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginUpdateWithoutCommentsInput } from './plugin-update-without-comments.input';
import { PluginCreateWithoutCommentsInput } from './plugin-create-without-comments.input';

@InputType()
export class PluginUpsertWithoutCommentsInput {

    @Field(() => PluginUpdateWithoutCommentsInput, {nullable:false})
    update!: PluginUpdateWithoutCommentsInput;

    @Field(() => PluginCreateWithoutCommentsInput, {nullable:false})
    create!: PluginCreateWithoutCommentsInput;
}
