import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PluginUpdateManyWithoutLanguageInput } from '../plugin/plugin-update-many-without-language.input';

@InputType()
export class LanguageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PluginUpdateManyWithoutLanguageInput, {nullable:true})
    plugins?: PluginUpdateManyWithoutLanguageInput;
}
