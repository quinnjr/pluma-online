import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PublicationSumAggregate {

    @Field(() => Int, {nullable:true})
    publishedYear?: number;

    @Field(() => Int, {nullable:true})
    journalVolume?: number;

    @Field(() => Int, {nullable:true})
    journalIssue?: number;
}
