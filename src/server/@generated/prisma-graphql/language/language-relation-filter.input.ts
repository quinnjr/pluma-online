import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';

@InputType()
export class LanguageRelationFilter {

    @Field(() => LanguageWhereInput, {nullable:true})
    is?: LanguageWhereInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    isNot?: LanguageWhereInput;
}
