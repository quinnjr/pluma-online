import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineStatus } from './pipeline-status.enum';

@InputType()
export class NestedEnumPipelineStatusFilter {

    @Field(() => PipelineStatus, {nullable:true})
    equals?: keyof typeof PipelineStatus;

    @Field(() => [PipelineStatus], {nullable:true})
    in?: Array<keyof typeof PipelineStatus>;

    @Field(() => [PipelineStatus], {nullable:true})
    notIn?: Array<keyof typeof PipelineStatus>;

    @Field(() => NestedEnumPipelineStatusFilter, {nullable:true})
    not?: NestedEnumPipelineStatusFilter;
}
