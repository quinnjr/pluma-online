import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutCategoryInput } from './plugin-create-without-category.input';
import { PluginCreateOrConnectWithoutCategoryInput } from './plugin-create-or-connect-without-category.input';
import { PluginUpsertWithWhereUniqueWithoutCategoryInput } from './plugin-upsert-with-where-unique-without-category.input';
import { PluginCreateManyCategoryInputEnvelope } from './plugin-create-many-category-input-envelope.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithWhereUniqueWithoutCategoryInput } from './plugin-update-with-where-unique-without-category.input';
import { PluginUpdateManyWithWhereWithoutCategoryInput } from './plugin-update-many-with-where-without-category.input';
import { PluginScalarWhereInput } from './plugin-scalar-where.input';

@InputType()
export class PluginUpdateManyWithoutCategoryInput {

    @Field(() => [PluginCreateWithoutCategoryInput], {nullable:true})
    create?: Array<PluginCreateWithoutCategoryInput>;

    @Field(() => [PluginCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<PluginCreateOrConnectWithoutCategoryInput>;

    @Field(() => [PluginUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<PluginUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => PluginCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: PluginCreateManyCategoryInputEnvelope;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    set?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    disconnect?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    delete?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    connect?: Array<PluginWhereUniqueInput>;

    @Field(() => [PluginUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<PluginUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [PluginUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<PluginUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [PluginScalarWhereInput], {nullable:true})
    deleteMany?: Array<PluginScalarWhereInput>;
}
