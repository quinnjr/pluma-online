import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineCreateManyInput } from './pipeline-create-many.input';

@ArgsType()
export class CreateManyPipelineArgs {

    @Field(() => [PipelineCreateManyInput], {nullable:false})
    data!: Array<PipelineCreateManyInput>;
}
