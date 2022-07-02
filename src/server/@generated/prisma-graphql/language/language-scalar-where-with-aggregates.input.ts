import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LanguageScalarWhereWithAggregatesInput {

    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LanguageScalarWhereWithAggregatesInput>;

    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LanguageScalarWhereWithAggregatesInput>;

    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LanguageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
