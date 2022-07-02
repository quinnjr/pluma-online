import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LanguageCountOrderByAggregateInput } from './language-count-order-by-aggregate.input';
import { LanguageMaxOrderByAggregateInput } from './language-max-order-by-aggregate.input';
import { LanguageMinOrderByAggregateInput } from './language-min-order-by-aggregate.input';

@InputType()
export class LanguageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => LanguageCountOrderByAggregateInput, {nullable:true})
    _count?: LanguageCountOrderByAggregateInput;

    @Field(() => LanguageMaxOrderByAggregateInput, {nullable:true})
    _max?: LanguageMaxOrderByAggregateInput;

    @Field(() => LanguageMinOrderByAggregateInput, {nullable:true})
    _min?: LanguageMinOrderByAggregateInput;
}
