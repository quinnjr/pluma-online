import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineStatus } from './pipeline-status.enum';
import { NestedEnumPipelineStatusWithAggregatesFilter } from './nested-enum-pipeline-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPipelineStatusFilter } from './nested-enum-pipeline-status-filter.input';

@InputType()
export class EnumPipelineStatusWithAggregatesFilter {

    @Field(() => PipelineStatus, {nullable:true})
    equals?: keyof typeof PipelineStatus;

    @Field(() => [PipelineStatus], {nullable:true})
    in?: Array<keyof typeof PipelineStatus>;

    @Field(() => [PipelineStatus], {nullable:true})
    notIn?: Array<keyof typeof PipelineStatus>;

    @Field(() => NestedEnumPipelineStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPipelineStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPipelineStatusFilter, {nullable:true})
    _min?: NestedEnumPipelineStatusFilter;

    @Field(() => NestedEnumPipelineStatusFilter, {nullable:true})
    _max?: NestedEnumPipelineStatusFilter;
}
