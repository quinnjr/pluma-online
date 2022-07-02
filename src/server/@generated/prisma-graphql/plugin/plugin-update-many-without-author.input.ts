import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutAuthorInput } from './plugin-create-without-author.input';
import { PluginCreateOrConnectWithoutAuthorInput } from './plugin-create-or-connect-without-author.input';
import { PluginUpsertWithWhereUniqueWithoutAuthorInput } from './plugin-upsert-with-where-unique-without-author.input';
import { PluginCreateManyAuthorInputEnvelope } from './plugin-create-many-author-input-envelope.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithWhereUniqueWithoutAuthorInput } from './plugin-update-with-where-unique-without-author.input';
import { PluginUpdateManyWithWhereWithoutAuthorInput } from './plugin-update-many-with-where-without-author.input';
import { PluginScalarWhereInput } from './plugin-scalar-where.input';

@InputType()
export class PluginUpdateManyWithoutAuthorInput {

    @Field(() => [PluginCreateWithoutAuthorInput], {nullable:true})
    create?: Array<PluginCreateWithoutAuthorInput>;

    @Field(() => [PluginCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<PluginCreateOrConnectWithoutAuthorInput>;

    @Field(() => [PluginUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<PluginUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => PluginCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: PluginCreateManyAuthorInputEnvelope;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    set?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    disconnect?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    delete?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    connect?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<PluginUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [PluginUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<PluginUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [PluginScalarWhereInput], {nullable:true})
    deleteMany?: Array<PluginScalarWhereInput>;
}
