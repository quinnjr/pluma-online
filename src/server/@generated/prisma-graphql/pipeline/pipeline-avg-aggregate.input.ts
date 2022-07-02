import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PipelineAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
