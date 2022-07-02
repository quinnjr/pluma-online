import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PipelineStatus } from '../prisma/pipeline-status.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class PipelineCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => PipelineStatus, {nullable:true})
    status?: keyof typeof PipelineStatus;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
