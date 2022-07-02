import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationWhereInput } from './registration-where.input';
import { RegistrationOrderByWithRelationInput } from './registration-order-by-with-relation.input';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegistrationCountAggregateInput } from './registration-count-aggregate.input';
import { RegistrationMinAggregateInput } from './registration-min-aggregate.input';
import { RegistrationMaxAggregateInput } from './registration-max-aggregate.input';

@ArgsType()
export class RegistrationAggregateArgs {

    @Field(() => RegistrationWhereInput, {nullable:true})
    where?: RegistrationWhereInput;

    @Field(() => [RegistrationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegistrationOrderByWithRelationInput>;

    @Field(() => RegistrationWhereUniqueInput, {nullable:true})
    cursor?: RegistrationWhereUniqueInput;

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
