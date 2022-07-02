import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineCreateManyUserInput } from './pipeline-create-many-user.input';

@InputType()
export class PipelineCreateManyUserInputEnvelope {

    @Field(() => [PipelineCreateManyUserInput], {nullable:false})
    data!: Array<PipelineCreateManyUserInput>;
}
