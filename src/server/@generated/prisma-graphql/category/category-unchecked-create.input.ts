import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginUncheckedCreateNestedManyWithoutCategoryInput } from '../plugin/plugin-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PluginUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    plugins?: PluginUncheckedCreateNestedManyWithoutCategoryInput;
}
