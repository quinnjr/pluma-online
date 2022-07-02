import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutPluginsInput } from './language-create-without-plugins.input';
import { LanguageCreateOrConnectWithoutPluginsInput } from './language-create-or-connect-without-plugins.input';
import { LanguageUpsertWithoutPluginsInput } from './language-upsert-without-plugins.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageUpdateWithoutPluginsInput } from './language-update-without-plugins.input';

@InputType()
export class LanguageUpdateOneRequiredWithoutPluginsInput {

    @Field(() => LanguageCreateWithoutPluginsInput, {nullable:true})
    create?: LanguageCreateWithoutPluginsInput;

    @Field(() => LanguageCreateOrConnectWithoutPluginsInput, {nullable:true})
    connectOrCreate?: LanguageCreateOrConnectWithoutPluginsInput;

    @Field(() => LanguageUpsertWithoutPluginsInput, {nullable:true})
    upsert?: LanguageUpsertWithoutPluginsInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    connect?: LanguageWhereUniqueInput;

    @Field(() => LanguageUpdateWithoutPluginsInput, {nullable:true})
    update?: LanguageUpdateWithoutPluginsInput;
}
