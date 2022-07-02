import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { CategoryOrderByWithRelationInput } from './category-order-by-with-relation.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoryCountAggregateInput } from './category-count-aggregate.input';
import { CategoryMinAggregateInput } from './category-min-aggregate.input';
import { CategoryMaxAggregateInput } from './category-max-aggregate.input';

@ArgsType()
export class CategoryAggregateArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    where?: CategoryWhereInput;

    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: CategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: CategoryCountAggregateInput;

    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: CategoryMinAggregateInput;

    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: CategoryMaxAggregateInput;
}
