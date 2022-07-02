import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineCreateWithoutUserInput } from './pipeline-create-without-user.input';
import { PipelineCreateOrConnectWithoutUserInput } from './pipeline-create-or-connect-without-user.input';
import { PipelineCreateManyUserInputEnvelope } from './pipeline-create-many-user-input-envelope.input';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';

@InputType()
export class PipelineUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PipelineCreateWithoutUserInput], {nullable:true})
    create?: Array<PipelineCreateWithoutUserInput>;

    @Field(() => [PipelineCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PipelineCreateOrConnectWithoutUserInput>;

    @Field(() => PipelineCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PipelineCreateManyUserInputEnvelope;

    @Field(() => [PipelineWhereUniqueInput], {nullable:true})
    connect?: Array<PipelineWhereUniqueInput>;
}
