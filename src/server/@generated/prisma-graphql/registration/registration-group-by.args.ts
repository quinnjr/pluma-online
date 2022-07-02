import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationWhereInput } from './registration-where.input';
import { RegistrationOrderByWithAggregationInput } from './registration-order-by-with-aggregation.input';
import { RegistrationScalarFieldEnum } from './registration-scalar-field.enum';
import { RegistrationScalarWhereWithAggregatesInput } from './registration-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RegistrationCountAggregateInput } from './registration-count-aggregate.input';
import { RegistrationMinAggregateInput } from './registration-min-aggregate.input';
import { RegistrationMaxAggregateInput } from './registration-max-aggregate.input';

@ArgsType()
export class RegistrationGroupByArgs {

    @Field(() => RegistrationWhereInput, {nullable:true})
    where?: RegistrationWhereInput;

    @Field(() => [RegistrationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RegistrationOrderByWithAggregationInput>;

    @Field(() => [RegistrationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RegistrationScalarFieldEnum>;

    @Field(() => RegistrationScalarWhereWithAggregatesInput, {nullable:true})
    having?: RegistrationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RegistrationCountAggregateInput, {nullable:true})
    _count?: RegistrationCountAggregateInput;

    @Field(() => RegistrationMinAggregateInput, {nullable:true})
    _min?: RegistrationMinAggregateInput;

    @Field(() => RegistrationMaxAggregateInput, {nullable:true})
    _max?: RegistrationMaxAggregateInput;
}
