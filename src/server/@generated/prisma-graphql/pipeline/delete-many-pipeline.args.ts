import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineWhereInput } from './pipeline-where.input';

@ArgsType()
export class DeleteManyPipelineArgs {

    @Field(() => PipelineWhereInput, {nullable:true})
    where?: PipelineWhereInput;
}
