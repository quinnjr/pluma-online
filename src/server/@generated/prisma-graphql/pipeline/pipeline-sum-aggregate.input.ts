import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PipelineSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
