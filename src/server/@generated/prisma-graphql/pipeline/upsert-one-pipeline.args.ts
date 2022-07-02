import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';
import { PipelineCreateInput } from './pipeline-create.input';
import { PipelineUpdateInput } from './pipeline-update.input';

@ArgsType()
export class UpsertOnePipelineArgs {

    @Field(() => PipelineWhereUniqueInput, {nullable:false})
    where!: PipelineWhereUniqueInput;

    @Field(() => PipelineCreateInput, {nullable:false})
    create!: PipelineCreateInput;

    @Field(() => PipelineUpdateInput, {nullable:false})
    update!: PipelineUpdateInput;
}
