import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PublicationAvgAggregate {

    @Field(() => Float, {nullable:true})
    publishedYear?: number;

    @Field(() => Float, {nullable:true})
    journalVolume?: number;

    @Field(() => Float, {nullable:true})
    journalIssue?: number;
}
