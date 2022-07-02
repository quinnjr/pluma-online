import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineStatus } from './pipeline-status.enum';
import { NestedEnumPipelineStatusFilter } from './nested-enum-pipeline-status-filter.input';

@InputType()
export class EnumPipelineStatusFilter {

    @Field(() => PipelineStatus, {nullable:true})
    equals?: keyof typeof PipelineStatus;

    @Field(() => [PipelineStatus], {nullable:true})
    in?: Array<keyof typeof PipelineStatus>;

    @Field(() => [PipelineStatus], {nullable:true})
    notIn?: Array<keyof typeof PipelineStatus>;

    @Field(() => NestedEnumPipelineStatusFilter, {nullable:true})
    not?: NestedEnumPipelineStatusFilter;
}
