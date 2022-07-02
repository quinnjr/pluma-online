import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PluginOrderByRelationAggregateInput } from '../plugin/plugin-order-by-relation-aggregate.input';
import { PipelineOrderByRelationAggregateInput } from '../pipeline/pipeline-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { RegistrationOrderByWithRelationInput } from '../registration/registration-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    passwordHash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    institution?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => PluginOrderByRelationAggregateInput, {nullable:true})
    plugins?: PluginOrderByRelationAggregateInput;

    @Field(() => PipelineOrderByRelationAggregateInput, {nullable:true})
    pipelines?: PipelineOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => RegistrationOrderByWithRelationInput, {nullable:true})
    registration?: RegistrationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
