import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';

@ObjectType()
export class CategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: CategoryCountAggregate;

    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: CategoryMinAggregate;

    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: CategoryMaxAggregate;
}
