import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PluginCountOrderByAggregateInput } from './plugin-count-order-by-aggregate.input';
import { PluginAvgOrderByAggregateInput } from './plugin-avg-order-by-aggregate.input';
import { PluginMaxOrderByAggregateInput } from './plugin-max-order-by-aggregate.input';
import { PluginMinOrderByAggregateInput } from './plugin-min-order-by-aggregate.input';
import { PluginSumOrderByAggregateInput } from './plugin-sum-order-by-aggregate.input';

@InputType()
export class PluginOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    githubUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verification?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PluginCountOrderByAggregateInput, {nullable:true})
    _count?: PluginCountOrderByAggregateInput;

    @Field(() => PluginAvgOrderByAggregateInput, {nullable:true})
    _avg?: PluginAvgOrderByAggregateInput;

    @Field(() => PluginMaxOrderByAggregateInput, {nullable:true})
    _max?: PluginMaxOrderByAggregateInput;

    @Field(() => PluginMinOrderByAggregateInput, {nullable:true})
    _min?: PluginMinOrderByAggregateInput;

    @Field(() => PluginSumOrderByAggregateInput, {nullable:true})
    _sum?: PluginSumOrderByAggregateInput;
}
