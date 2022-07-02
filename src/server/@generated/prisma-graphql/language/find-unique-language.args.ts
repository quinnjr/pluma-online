import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@ArgsType()
export class FindUniqueLanguageArgs {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    where!: LanguageWhereUniqueInput;
}
