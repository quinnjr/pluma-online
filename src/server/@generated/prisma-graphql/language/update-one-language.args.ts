import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageUpdateInput } from './language-update.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@ArgsType()
export class UpdateOneLanguageArgs {

    @Field(() => LanguageUpdateInput, {nullable:false})
    data!: LanguageUpdateInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;
}
