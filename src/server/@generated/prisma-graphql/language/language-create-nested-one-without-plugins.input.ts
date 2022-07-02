import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutPluginsInput } from './language-create-without-plugins.input';
import { LanguageCreateOrConnectWithoutPluginsInput } from './language-create-or-connect-without-plugins.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@InputType()
export class LanguageCreateNestedOneWithoutPluginsInput {

    @Field(() => LanguageCreateWithoutPluginsInput, {nullable:true})
    create?: LanguageCreateWithoutPluginsInput;

    @Field(() => LanguageCreateOrConnectWithoutPluginsInput, {nullable:true})
    connectOrCreate?: LanguageCreateOrConnectWithoutPluginsInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    connect?: LanguageWhereUniqueInput;
}
