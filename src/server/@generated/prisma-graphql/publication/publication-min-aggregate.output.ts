import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PublicationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    authors?: string;

    @Field(() => Int, {nullable:true})
    publishedYear?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    journal?: string;

    @Field(() => Int, {nullable:true})
    journalVolume?: number;

    @Field(() => Int, {nullable:true})
    journalIssue?: number;

    @Field(() => String, {nullable:true})
    pageRange?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    doi?: string;

    @Field(() => Boolean, {nullable:true})
    isNew?: boolean;
}
