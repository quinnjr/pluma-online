import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PluginUncheckedUpdateManyWithoutLanguageInput } from '../plugin/plugin-unchecked-update-many-without-language.input';

@InputType()
export class LanguageUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PluginUncheckedUpdateManyWithoutLanguageInput, {nullable:true})
    plugins?: PluginUncheckedUpdateManyWithoutLanguageInput;
}
