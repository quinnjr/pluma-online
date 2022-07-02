import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Plugin } from '../plugin/plugin.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Plugin], {nullable:true})
    plugins?: Array<Plugin>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
