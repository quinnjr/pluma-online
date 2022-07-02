import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutLanguageInput } from './plugin-create-without-language.input';
import { PluginCreateOrConnectWithoutLanguageInput } from './plugin-create-or-connect-without-language.input';
import { PluginCreateManyLanguageInputEnvelope } from './plugin-create-many-language-input-envelope.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';

@InputType()
export class PluginCreateNestedManyWithoutLanguageInput {

    @Field(() => [PluginCreateWithoutLanguageInput], {nullable:true})
    create?: Array<PluginCreateWithoutLanguageInput>;

    @Field(() => [PluginCreateOrConnectWithoutLanguageInput], {nullable:true})
    connectOrCreate?: Array<PluginCreateOrConnectWithoutLanguageInput>;

    @Field(() => PluginCreateManyLanguageInputEnvelope, {nullable:true})
    createMany?: PluginCreateManyLanguageInputEnvelope;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    connect?: Array<PluginWhereUniqueInput>;
}
