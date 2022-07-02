import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutCommentsInput } from './plugin-create-without-comments.input';
import { PluginCreateOrConnectWithoutCommentsInput } from './plugin-create-or-connect-without-comments.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';

@InputType()
export class PluginCreateNestedOneWithoutCommentsInput {

    @Field(() => PluginCreateWithoutCommentsInput, {nullable:true})
    create?: PluginCreateWithoutCommentsInput;

    @Field(() => PluginCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: PluginCreateOrConnectWithoutCommentsInput;

    @Field(() => PluginWhereUniqueInput, {nullable:true})
    connect?: PluginWhereUniqueInput;
}
