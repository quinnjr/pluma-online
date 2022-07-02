import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { LanguageOrderByWithRelationInput } from './language-order-by-with-relation.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguageCountAggregateInput } from './language-count-aggregate.input';
import { LanguageMinAggregateInput } from './language-min-aggregate.input';
import { LanguageMaxAggregateInput } from './language-max-aggregate.input';

@ArgsType()
export class LanguageAggregateArgs {

    @Field(() => LanguageWhereInput, {nullable:true})
    where?: LanguageWhereInput;

    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: LanguageWhereUniqueInput;

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
