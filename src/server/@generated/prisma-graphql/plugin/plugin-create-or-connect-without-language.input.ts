import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginCreateWithoutLanguageInput } from './plugin-create-without-language.input';

@InputType()
export class PluginCreateOrConnectWithoutLanguageInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginCreateWithoutLanguageInput, {nullable:false})
    create!: PluginCreateWithoutLanguageInput;
}
