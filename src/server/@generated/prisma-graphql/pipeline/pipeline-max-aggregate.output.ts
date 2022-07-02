import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PipelineStatus } from '../prisma/pipeline-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PipelineMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    githubUrl?: string;

    @Field(() => PipelineStatus, {nullable:true})
    status?: keyof typeof PipelineStatus;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
