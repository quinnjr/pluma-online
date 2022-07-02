import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pluginId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: CommentCountOrderByAggregateInput;

    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentMaxOrderByAggregateInput;

    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: CommentMinOrderByAggregateInput;
}
