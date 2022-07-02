import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PipelineSumAggregate {

    @Field(() => Int, {nullable:true})
    rating?: number;
}
