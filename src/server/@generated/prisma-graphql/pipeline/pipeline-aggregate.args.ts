import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineWhereInput } from './pipeline-where.input';
import { PipelineOrderByWithRelationInput } from './pipeline-order-by-with-relation.input';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PipelineCountAggregateInput } from './pipeline-count-aggregate.input';
import { PipelineAvgAggregateInput } from './pipeline-avg-aggregate.input';
import { PipelineSumAggregateInput } from './pipeline-sum-aggregate.input';
import { PipelineMinAggregateInput } from './pipeline-min-aggregate.input';
import { PipelineMaxAggregateInput } from './pipeline-max-aggregate.input';

@ArgsType()
export class PipelineAggregateArgs {

    @Field(() => PipelineWhereInput, {nullable:true})
    where?: PipelineWhereInput;

    @Field(() => [PipelineOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PipelineOrderByWithRelationInput>;

    @Field(() => PipelineWhereUniqueInput, {nullable:true})
    cursor?: PipelineWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PipelineCountAggregateInput, {nullable:true})
    _count?: PipelineCountAggregateInput;

    @Field(() => PipelineAvgAggregateInput, {nullable:true})
    _avg?: PipelineAvgAggregateInput;

    @Field(() => PipelineSumAggregateInput, {nullable:true})
    _sum?: PipelineSumAggregateInput;

    @Field(() => PipelineMinAggregateInput, {nullable:true})
    _min?: PipelineMinAggregateInput;

    @Field(() => PipelineMaxAggregateInput, {nullable:true})
    _max?: PipelineMaxAggregateInput;
}
