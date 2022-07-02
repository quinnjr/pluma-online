import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PublicationMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    authors?: true;

    @Field(() => Boolean, {nullable:true})
    publishedYear?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    journal?: true;

    @Field(() => Boolean, {nullable:true})
    journalVolume?: true;

    @Field(() => Boolean, {nullable:true})
    journalIssue?: true;

    @Field(() => Boolean, {nullable:true})
    pageRange?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    doi?: true;

    @Field(() => Boolean, {nullable:true})
    isNew?: true;
}
