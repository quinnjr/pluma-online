import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageCreateWithoutPluginsInput } from './language-create-without-plugins.input';

@InputType()
export class LanguageCreateOrConnectWithoutPluginsInput {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;

    @Field(() => LanguageCreateWithoutPluginsInput, {nullable:false})
    create!: LanguageCreateWithoutPluginsInput;
}
