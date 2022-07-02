import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateNestedManyWithoutLanguageInput } from '../plugin/plugin-create-nested-many-without-language.input';

@InputType()
export class LanguageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PluginCreateNestedManyWithoutLanguageInput, {nullable:true})
    plugins?: PluginCreateNestedManyWithoutLanguageInput;
}
