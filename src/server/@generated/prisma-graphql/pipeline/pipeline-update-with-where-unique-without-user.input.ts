import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';
import { PipelineUpdateWithoutUserInput } from './pipeline-update-without-user.input';

@InputType()
export class PipelineUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PipelineWhereUniqueInput, {nullable:false})
    where!: PipelineWhereUniqueInput;

    @Field(() => PipelineUpdateWithoutUserInput, {nullable:false})
    data!: PipelineUpdateWithoutUserInput;
}
