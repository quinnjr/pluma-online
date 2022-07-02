import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineScalarWhereInput } from './pipeline-scalar-where.input';
import { PipelineUpdateManyMutationInput } from './pipeline-update-many-mutation.input';

@InputType()
export class PipelineUpdateManyWithWhereWithoutUserInput {

    @Field(() => PipelineScalarWhereInput, {nullable:false})
    where!: PipelineScalarWhereInput;

    @Field(() => PipelineUpdateManyMutationInput, {nullable:false})
    data!: PipelineUpdateManyMutationInput;
}
