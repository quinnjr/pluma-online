import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { LanguageOrderByWithAggregationInput } from './language-order-by-with-aggregation.input';
import { LanguageScalarFieldEnum } from './language-scalar-field.enum';
import { LanguageScalarWhereWithAggregatesInput } from './language-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LanguageCountAggregateInput } from './language-count-aggregate.input';
import { LanguageMinAggregateInput } from './language-min-aggregate.input';
import { LanguageMaxAggregateInput } from './language-max-aggregate.input';

@ArgsType()
export class LanguageGroupByArgs {

    @Field(() => LanguageWhereInput, {nullable:true})
    where?: LanguageWhereInput;

    @Field(() => [LanguageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithAggregationInput>;

    @Field(() => [LanguageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LanguageScalarFieldEnum>;

    @Field(() => LanguageScalarWhereWithAggregatesInput, {nullable:true})
    having?: LanguageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LanguageCountAggregateInput, {nullable:true})
    _count?: LanguageCountAggregateInput;

    @Field(() => LanguageMinAggregateInput, {nullable:true})
    _min?: LanguageMinAggregateInput;

    @Field(() => LanguageMaxAggregateInput, {nullable:true})
    _max?: LanguageMaxAggregateInput;
}
