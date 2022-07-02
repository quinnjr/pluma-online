import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PipelineStatus } from '../prisma/pipeline-status.enum';
import { Int } from '@nestjs/graphql';
import { PipelineCountAggregate } from './pipeline-count-aggregate.output';
import { PipelineAvgAggregate } from './pipeline-avg-aggregate.output';
import { PipelineSumAggregate } from './pipeline-sum-aggregate.output';
import { PipelineMinAggregate } from './pipeline-min-aggregate.output';
import { PipelineMaxAggregate } from './pipeline-max-aggregate.output';

@ObjectType()
export class PipelineGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => PipelineStatus, {nullable:false})
    status!: keyof typeof PipelineStatus;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => PipelineCountAggregate, {nullable:true})
    _count?: PipelineCountAggregate;

    @Field(() => PipelineAvgAggregate, {nullable:true})
    _avg?: PipelineAvgAggregate;

    @Field(() => PipelineSumAggregate, {nullable:true})
    _sum?: PipelineSumAggregate;

    @Field(() => PipelineMinAggregate, {nullable:true})
    _min?: PipelineMinAggregate;

    @Field(() => PipelineMaxAggregate, {nullable:true})
    _max?: PipelineMaxAggregate;
}
