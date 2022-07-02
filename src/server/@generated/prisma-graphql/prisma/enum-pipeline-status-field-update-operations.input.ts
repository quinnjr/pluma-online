import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineStatus } from './pipeline-status.enum';

@InputType()
export class EnumPipelineStatusFieldUpdateOperationsInput {

    @Field(() => PipelineStatus, {nullable:true})
    set?: keyof typeof PipelineStatus;
}
