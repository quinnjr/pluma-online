import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PluginUpdateManyWithoutCategoryInput } from '../plugin/plugin-update-many-without-category.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PluginUpdateManyWithoutCategoryInput, {nullable:true})
    plugins?: PluginUpdateManyWithoutCategoryInput;
}
