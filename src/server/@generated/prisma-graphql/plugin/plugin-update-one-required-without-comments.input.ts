import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutCommentsInput } from './plugin-create-without-comments.input';
import { PluginCreateOrConnectWithoutCommentsInput } from './plugin-create-or-connect-without-comments.input';
import { PluginUpsertWithoutCommentsInput } from './plugin-upsert-without-comments.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutCommentsInput } from './plugin-update-without-comments.input';

@InputType()
export class PluginUpdateOneRequiredWithoutCommentsInput {

    @Field(() => PluginCreateWithoutCommentsInput, {nullable:true})
    create?: PluginCreateWithoutCommentsInput;

    @Field(() => PluginCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: PluginCreateOrConnectWithoutCommentsInput;

    @Field(() => PluginUpsertWithoutCommentsInput, {nullable:true})
    upsert?: PluginUpsertWithoutCommentsInput;

    @Field(() => PluginWhereUniqueInput, {nullable:true})
    connect?: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutCommentsInput, {nullable:true})
    update?: PluginUpdateWithoutCommentsInput;
}
