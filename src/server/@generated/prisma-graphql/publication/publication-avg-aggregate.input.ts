import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PublicationAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    publishedYear?: true;

    @Field(() => Boolean, {nullable:true})
    journalVolume?: true;

    @Field(() => Boolean, {nullable:true})
    journalIssue?: true;
}
