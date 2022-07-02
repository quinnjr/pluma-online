import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateManyLanguageInput } from './plugin-create-many-language.input';

@InputType()
export class PluginCreateManyLanguageInputEnvelope {

    @Field(() => [PluginCreateManyLanguageInput], {nullable:false})
    data!: Array<PluginCreateManyLanguageInput>;
}
