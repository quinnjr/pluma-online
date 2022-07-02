import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineCreateWithoutUserInput } from './pipeline-create-without-user.input';
import { PipelineCreateOrConnectWithoutUserInput } from './pipeline-create-or-connect-without-user.input';
import { PipelineUpsertWithWhereUniqueWithoutUserInput } from './pipeline-upsert-with-where-unique-without-user.input';
import { PipelineCreateManyUserInputEnvelope } from './pipeline-create-many-user-input-envelope.input';
import { PipelineWhereUniqueInput } from './pipeline-where-unique.input';
import { PipelineUpdateWithWhereUniqueWithoutUserInput } from './pipeline-update-with-where-unique-without-user.input';
import { PipelineUpdateManyWithWhereWithoutUserInput } from './pipeline-update-many-with-where-without-user.input';
import { PipelineScalarWhereInput } from './pipeline-scalar-where.input';

@InputType()
export class PipelineUncheckedUpdateManyWithoutUserInput {

    @Field(() => [PipelineCreateWithoutUserInput], {nullable:true})
    create?: Array<PipelineCreateWithoutUserInput>;

    @Field(() => [PipelineCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PipelineCreateOrConnectWithoutUserInput>;

    @Field(() => [PipelineUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<PipelineUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PipelineCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PipelineCreateManyUserInputEnvelope;

    @Field(() => [PipelineWhereUniqueInput], {nullable:true})
    set?: Array<PipelineWhereUniqueInput>;

    @Field(() => [PipelineWhereUniqueInput], {nullable:true})
    disconnect?: Array<PipelineWhereUniqueInput>;

    @Field(() => [PipelineWhereUniqueInput], {nullable:true})
    delete?: Array<PipelineWhereUniqueInput>;

    @Field(() => [PipelineWhereUniqueInput], {nullable:true})
    connect?: Array<PipelineWhereUniqueInput>;

    @Field(() => [PipelineUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<PipelineUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PipelineUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<PipelineUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PipelineScalarWhereInput], {nullable:true})
    deleteMany?: Array<PipelineScalarWhereInput>;
}
