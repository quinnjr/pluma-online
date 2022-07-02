import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutLanguageInput } from './plugin-update-without-language.input';
import { PluginCreateWithoutLanguageInput } from './plugin-create-without-language.input';

@InputType()
export class PluginUpsertWithWhereUniqueWithoutLanguageInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutLanguageInput, {nullable:false})
    update!: PluginUpdateWithoutLanguageInput;

    @Field(() => PluginCreateWithoutLanguageInput, {nullable:false})
    create!: PluginCreateWithoutLanguageInput;
}
