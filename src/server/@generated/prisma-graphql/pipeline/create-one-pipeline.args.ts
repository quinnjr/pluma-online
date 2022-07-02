import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineCreateInput } from './pipeline-create.input';

@ArgsType()
export class CreateOnePipelineArgs {

    @Field(() => PipelineCreateInput, {nullable:false})
    data!: PipelineCreateInput;
}
