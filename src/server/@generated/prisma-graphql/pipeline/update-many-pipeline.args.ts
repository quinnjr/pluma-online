import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineUpdateManyMutationInput } from './pipeline-update-many-mutation.input';
import { PipelineWhereInput } from './pipeline-where.input';

@ArgsType()
export class UpdateManyPipelineArgs {

    @Field(() => PipelineUpdateManyMutationInput, {nullable:false})
    data!: PipelineUpdateManyMutationInput;

    @Field(() => PipelineWhereInput, {nullable:true})
    where?: PipelineWhereInput;
}
