import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineUpdateInput } from './pipeline-update.input';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';

@ArgsType()
export class UpdateOnePipelineArgs {

    @Field(() => PipelineUpdateInput, {nullable:false})
    data!: PipelineUpdateInput;

    @Field(() => PipelineWhereUniqueInput, {nullable:false})
    where!: PipelineWhereUniqueInput;
}
