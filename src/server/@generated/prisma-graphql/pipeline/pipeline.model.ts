import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PipelineStatus } from '../prisma/pipeline-status.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Pipeline {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => PipelineStatus, {nullable:false,defaultValue:'Completed'})
    status!: keyof typeof PipelineStatus;

    @Field(() => Int, {nullable:false,defaultValue:0})
    rating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;
}
