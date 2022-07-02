import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';
import { PipelineUpdateWithoutUserInput } from './pipeline-update-without-user.input';
import { PipelineCreateWithoutUserInput } from './pipeline-create-without-user.input';

@InputType()
export class PipelineUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PipelineWhereUniqueInput, {nullable:false})
    where!: PipelineWhereUniqueInput;

    @Field(() => PipelineUpdateWithoutUserInput, {nullable:false})
    update!: PipelineUpdateWithoutUserInput;

    @Field(() => PipelineCreateWithoutUserInput, {nullable:false})
    create!: PipelineCreateWithoutUserInput;
}
