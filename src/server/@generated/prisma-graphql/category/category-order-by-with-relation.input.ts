import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PluginOrderByRelationAggregateInput } from '../plugin/plugin-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => PluginOrderByRelationAggregateInput, {nullable:true})
    plugins?: PluginOrderByRelationAggregateInput;
}
