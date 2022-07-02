import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutCategoryInput } from './plugin-create-without-category.input';
import { PluginCreateOrConnectWithoutCategoryInput } from './plugin-create-or-connect-without-category.input';
import { PluginCreateManyCategoryInputEnvelope } from './plugin-create-many-category-input-envelope.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';

@InputType()
export class PluginCreateNestedManyWithoutCategoryInput {

    @Field(() => [PluginCreateWithoutCategoryInput], {nullable:true})
    create?: Array<PluginCreateWithoutCategoryInput>;

    @Field(() => [PluginCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<PluginCreateOrConnectWithoutCategoryInput>;

    @Field(() => PluginCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: PluginCreateManyCategoryInputEnvelope;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    connect?: Array<PluginWhereUniqueInput>;
}
