import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageUpdateWithoutPluginsInput } from './language-update-without-plugins.input';
import { LanguageCreateWithoutPluginsInput } from './language-create-without-plugins.input';

@InputType()
export class LanguageUpsertWithoutPluginsInput {

    @Field(() => LanguageUpdateWithoutPluginsInput, {nullable:false})
    update!: LanguageUpdateWithoutPluginsInput;

    @Field(() => LanguageCreateWithoutPluginsInput, {nullable:false})
    create!: LanguageCreateWithoutPluginsInput;
}
