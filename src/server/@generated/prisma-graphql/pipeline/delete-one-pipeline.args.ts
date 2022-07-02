import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';

@ArgsType()
export class DeleteOnePipelineArgs {

    @Field(() => PipelineWhereUniqueInput, {nullable:false})
    where!: PipelineWhereUniqueInput;
}
