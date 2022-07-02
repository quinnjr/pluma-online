import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginUncheckedCreateNestedManyWithoutLanguageInput } from '../plugin/plugin-unchecked-create-nested-many-without-language.input';

@InputType()
export class LanguageUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PluginUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    plugins?: PluginUncheckedCreateNestedManyWithoutLanguageInput;
}
