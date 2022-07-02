import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';
import { PipelineCreateWithoutUserInput } from './pipeline-create-without-user.input';

@InputType()
export class PipelineCreateOrConnectWithoutUserInput {

    @Field(() => PipelineWhereUniqueInput, {nullable:false})
    where!: PipelineWhereUniqueInput;

    @Field(() => PipelineCreateWithoutUserInput, {nullable:false})
    create!: PipelineCreateWithoutUserInput;
}
