import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Publication {

    @Field(() => ID, {nullable:false})
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
    url!: string | null;

    @Field(() => String, {nullable:true})
    doi!: string | null;

    @Field(() => Boolean, {nullable:false})
    isNew!: boolean;
}
