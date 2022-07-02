import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutCategoryInput } from './plugin-update-without-category.input';
import { PluginCreateWithoutCategoryInput } from './plugin-create-without-category.input';

@InputType()
export class PluginUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutCategoryInput, {nullable:false})
    update!: PluginUpdateWithoutCategoryInput;

    @Field(() => PluginCreateWithoutCategoryInput, {nullable:false})
    create!: PluginCreateWithoutCategoryInput;
}
