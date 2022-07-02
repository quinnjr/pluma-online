import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CommentOrderByRelationAggregateInput } from './comment-order-by-relation-aggregate.input';
import { PluginOrderByWithRelationInput } from '../plugin/plugin-order-by-with-relation.input';

@InputType()
export class CommentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => CommentOrderByWithRelationInput, {nullable:true})
    parent?: CommentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    children?: CommentOrderByRelationAggregateInput;

    @Field(() => PluginOrderByWithRelationInput, {nullable:true})
    plugin?: PluginOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    pluginId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
