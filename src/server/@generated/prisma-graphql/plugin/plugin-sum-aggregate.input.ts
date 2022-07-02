import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PluginSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
