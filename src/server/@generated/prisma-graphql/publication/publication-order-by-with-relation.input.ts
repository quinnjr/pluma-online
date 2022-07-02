import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PublicationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authors?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publishedYear?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journalVolume?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journalIssue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pageRange?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    doi?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isNew?: keyof typeof SortOrder;
}
