import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RegistrationCountOrderByAggregateInput } from './registration-count-order-by-aggregate.input';
import { RegistrationMaxOrderByAggregateInput } from './registration-max-order-by-aggregate.input';
import { RegistrationMinOrderByAggregateInput } from './registration-min-order-by-aggregate.input';

@InputType()
export class RegistrationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => RegistrationCountOrderByAggregateInput, {nullable:true})
    _count?: RegistrationCountOrderByAggregateInput;

    @Field(() => RegistrationMaxOrderByAggregateInput, {nullable:true})
    _max?: RegistrationMaxOrderByAggregateInput;

    @Field(() => RegistrationMinOrderByAggregateInput, {nullable:true})
    _min?: RegistrationMinOrderByAggregateInput;
}
