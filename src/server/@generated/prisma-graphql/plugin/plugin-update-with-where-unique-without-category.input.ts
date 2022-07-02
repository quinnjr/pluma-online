import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutCategoryInput } from './plugin-update-without-category.input';

@InputType()
export class PluginUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutCategoryInput, {nullable:false})
    data!: PluginUpdateWithoutCategoryInput;
}
