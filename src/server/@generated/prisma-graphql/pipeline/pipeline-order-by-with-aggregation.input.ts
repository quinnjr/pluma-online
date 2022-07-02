import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PipelineCountOrderByAggregateInput } from './pipeline-count-order-by-aggregate.input';
import { PipelineAvgOrderByAggregateInput } from './pipeline-avg-order-by-aggregate.input';
import { PipelineMaxOrderByAggregateInput } from './pipeline-max-order-by-aggregate.input';
import { PipelineMinOrderByAggregateInput } from './pipeline-min-order-by-aggregate.input';
import { PipelineSumOrderByAggregateInput } from './pipeline-sum-order-by-aggregate.input';

@InputType()
export class PipelineOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    githubUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => PipelineCountOrderByAggregateInput, {nullable:true})
    _count?: PipelineCountOrderByAggregateInput;

    @Field(() => PipelineAvgOrderByAggregateInput, {nullable:true})
    _avg?: PipelineAvgOrderByAggregateInput;

    @Field(() => PipelineMaxOrderByAggregateInput, {nullable:true})
    _max?: PipelineMaxOrderByAggregateInput;

    @Field(() => PipelineMinOrderByAggregateInput, {nullable:true})
    _min?: PipelineMinOrderByAggregateInput;

    @Field(() => PipelineSumOrderByAggregateInput, {nullable:true})
    _sum?: PipelineSumOrderByAggregateInput;
}
