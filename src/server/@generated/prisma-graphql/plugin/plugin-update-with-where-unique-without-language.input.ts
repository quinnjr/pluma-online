import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutLanguageInput } from './plugin-update-without-language.input';

@InputType()
export class PluginUpdateWithWhereUniqueWithoutLanguageInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutLanguageInput, {nullable:false})
    data!: PluginUpdateWithoutLanguageInput;
}
