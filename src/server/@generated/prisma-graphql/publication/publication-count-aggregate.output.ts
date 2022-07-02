import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PublicationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    authors!: number;

    @Field(() => Int, {nullable:false})
    publishedYear!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    journal!: number;

    @Field(() => Int, {nullable:false})
    journalVolume!: number;

    @Field(() => Int, {nullable:false})
    journalIssue!: number;

    @Field(() => Int, {nullable:false})
    pageRange!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    doi!: number;

    @Field(() => Int, {nullable:false})
    isNew!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
