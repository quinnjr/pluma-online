import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PluginCount {

    @Field(() => Int, {nullable:false})
    comments?: number;
}
