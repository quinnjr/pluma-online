import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutLanguageInput } from './plugin-create-without-language.input';
import { PluginCreateOrConnectWithoutLanguageInput } from './plugin-create-or-connect-without-language.input';
import { PluginUpsertWithWhereUniqueWithoutLanguageInput } from './plugin-upsert-with-where-unique-without-language.input';
import { PluginCreateManyLanguageInputEnvelope } from './plugin-create-many-language-input-envelope.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithWhereUniqueWithoutLanguageInput } from './plugin-update-with-where-unique-without-language.input';
import { PluginUpdateManyWithWhereWithoutLanguageInput } from './plugin-update-many-with-where-without-language.input';
import { PluginScalarWhereInput } from './plugin-scalar-where.input';

@InputType()
export class PluginUpdateManyWithoutLanguageInput {

    @Field(() => [PluginCreateWithoutLanguageInput], {nullable:true})
    create?: Array<PluginCreateWithoutLanguageInput>;

    @Field(() => [PluginCreateOrConnectWithoutLanguageInput], {nullable:true})
    connectOrCreate?: Array<PluginCreateOrConnectWithoutLanguageInput>;

    @Field(() => [PluginUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    upsert?: Array<PluginUpsertWithWhereUniqueWithoutLanguageInput>;

    @Field(() => PluginCreateManyLanguageInputEnvelope, {nullable:true})
    createMany?: PluginCreateManyLanguageInputEnvelope;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    set?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    disconnect?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    delete?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    connect?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    update?: Array<PluginUpdateWithWhereUniqueWithoutLanguageInput>;

    @Field(() => [PluginUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    updateMany?: Array<PluginUpdateManyWithWhereWithoutLanguageInput>;

    @Field(() => [PluginScalarWhereInput], {nullable:true})
    deleteMany?: Array<PluginScalarWhereInput>;
}
