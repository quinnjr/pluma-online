import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PluginUncheckedUpdateManyWithoutCategoryInput } from '../plugin/plugin-unchecked-update-many-without-category.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PluginUncheckedUpdateManyWithoutCategoryInput, {nullable:true})
    plugins?: PluginUncheckedUpdateManyWithoutCategoryInput;
}
