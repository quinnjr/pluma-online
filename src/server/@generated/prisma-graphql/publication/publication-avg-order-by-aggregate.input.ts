import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PublicationAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    publishedYear?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journalVolume?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journalIssue?: keyof typeof SortOrder;
}
