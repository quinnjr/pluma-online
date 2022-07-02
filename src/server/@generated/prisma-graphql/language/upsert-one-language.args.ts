import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { LanguageCreateInput } from './language-create.input';
import { LanguageUpdateInput } from './language-update.input';

@ArgsType()
export class UpsertOneLanguageArgs {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;

    @Field(() => LanguageCreateInput, {nullable:false})
    create!: LanguageCreateInput;

    @Field(() => LanguageUpdateInput, {nullable:false})
    update!: LanguageUpdateInput;
}
