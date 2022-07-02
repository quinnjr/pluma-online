import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateNestedManyWithoutCategoryInput } from '../plugin/plugin-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PluginCreateNestedManyWithoutCategoryInput, {nullable:true})
    plugins?: PluginCreateNestedManyWithoutCategoryInput;
}
