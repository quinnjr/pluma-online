import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PublicationCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

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
}
