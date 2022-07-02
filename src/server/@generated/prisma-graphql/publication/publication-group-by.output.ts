import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PublicationCountAggregate } from './publication-count-aggregate.output';
import { PublicationAvgAggregate } from './publication-avg-aggregate.output';
import { PublicationSumAggregate } from './publication-sum-aggregate.output';
import { PublicationMinAggregate } from './publication-min-aggregate.output';
import { PublicationMaxAggregate } from './publication-max-aggregate.output';

@ObjectType()
export class PublicationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    authors!: string;

    @Field(() => Int, {nullable:false})
    publishedYear!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    journal!: string;

    @Field(() => Int, {nullable:false})
    journalVolume!: number;

    @Field(() => Int, {nullable:false})
    journalIssue!: number;

    @Field(() => String, {nullable:false})
    pageRange!: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    doi?: string;

    @Field(() => Boolean, {nullable:false})
    isNew!: boolean;

    @Field(() => PublicationCountAggregate, {nullable:true})
    _count?: PublicationCountAggregate;

    @Field(() => PublicationAvgAggregate, {nullable:true})
    _avg?: PublicationAvgAggregate;

    @Field(() => PublicationSumAggregate, {nullable:true})
    _sum?: PublicationSumAggregate;

    @Field(() => PublicationMinAggregate, {nullable:true})
    _min?: PublicationMinAggregate;

    @Field(() => PublicationMaxAggregate, {nullable:true})
    _max?: PublicationMaxAggregate;
}
