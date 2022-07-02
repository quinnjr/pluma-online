import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginCreateWithoutCategoryInput } from './plugin-create-without-category.input';

@InputType()
export class PluginCreateOrConnectWithoutCategoryInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginCreateWithoutCategoryInput, {nullable:false})
    create!: PluginCreateWithoutCategoryInput;
}
