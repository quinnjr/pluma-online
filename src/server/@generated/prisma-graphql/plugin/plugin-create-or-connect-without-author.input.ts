import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginCreateWithoutAuthorInput } from './plugin-create-without-author.input';

@InputType()
export class PluginCreateOrConnectWithoutAuthorInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginCreateWithoutAuthorInput, {nullable:false})
    create!: PluginCreateWithoutAuthorInput;
}
