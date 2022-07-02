import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PublicationCountOrderByAggregateInput } from './publication-count-order-by-aggregate.input';
import { PublicationAvgOrderByAggregateInput } from './publication-avg-order-by-aggregate.input';
import { PublicationMaxOrderByAggregateInput } from './publication-max-order-by-aggregate.input';
import { PublicationMinOrderByAggregateInput } from './publication-min-order-by-aggregate.input';
import { PublicationSumOrderByAggregateInput } from './publication-sum-order-by-aggregate.input';

@InputType()
export class PublicationOrderByWithAggregationInput {

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

    @Field(() => PublicationCountOrderByAggregateInput, {nullable:true})
    _count?: PublicationCountOrderByAggregateInput;

    @Field(() => PublicationAvgOrderByAggregateInput, {nullable:true})
    _avg?: PublicationAvgOrderByAggregateInput;

    @Field(() => PublicationMaxOrderByAggregateInput, {nullable:true})
    _max?: PublicationMaxOrderByAggregateInput;

    @Field(() => PublicationMinOrderByAggregateInput, {nullable:true})
    _min?: PublicationMinOrderByAggregateInput;

    @Field(() => PublicationSumOrderByAggregateInput, {nullable:true})
    _sum?: PublicationSumOrderByAggregateInput;
}
