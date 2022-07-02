import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PluginAvgAggregate {

    @Field(() => Float, {nullable:true})
    rating?: number;
}
