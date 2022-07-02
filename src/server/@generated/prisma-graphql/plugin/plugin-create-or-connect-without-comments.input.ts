import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginCreateWithoutCommentsInput } from './plugin-create-without-comments.input';

@InputType()
export class PluginCreateOrConnectWithoutCommentsInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginCreateWithoutCommentsInput, {nullable:false})
    create!: PluginCreateWithoutCommentsInput;
}
