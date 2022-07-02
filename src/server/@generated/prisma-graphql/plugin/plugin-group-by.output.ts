import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PluginStatus } from '../prisma/plugin-status.enum';
import { PluginCountAggregate } from './plugin-count-aggregate.output';
import { PluginAvgAggregate } from './plugin-avg-aggregate.output';
import { PluginSumAggregate } from './plugin-sum-aggregate.output';
import { PluginMinAggregate } from './plugin-min-aggregate.output';
import { PluginMaxAggregate } from './plugin-max-aggregate.output';

@ObjectType()
export class PluginGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => String, {nullable:false})
    languageId!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => PluginStatus, {nullable:false})
    verification!: keyof typeof PluginStatus;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PluginCountAggregate, {nullable:true})
    _count?: PluginCountAggregate;

    @Field(() => PluginAvgAggregate, {nullable:true})
    _avg?: PluginAvgAggregate;

    @Field(() => PluginSumAggregate, {nullable:true})
    _sum?: PluginSumAggregate;

    @Field(() => PluginMinAggregate, {nullable:true})
    _min?: PluginMinAggregate;

    @Field(() => PluginMaxAggregate, {nullable:true})
    _max?: PluginMaxAggregate;
}
