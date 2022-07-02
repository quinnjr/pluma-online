import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';
import { PublicationOrderByWithAggregationInput } from './publication-order-by-with-aggregation.input';
import { PublicationScalarFieldEnum } from './publication-scalar-field.enum';
import { PublicationScalarWhereWithAggregatesInput } from './publication-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PublicationCountAggregateInput } from './publication-count-aggregate.input';
import { PublicationAvgAggregateInput } from './publication-avg-aggregate.input';
import { PublicationSumAggregateInput } from './publication-sum-aggregate.input';
import { PublicationMinAggregateInput } from './publication-min-aggregate.input';
import { PublicationMaxAggregateInput } from './publication-max-aggregate.input';

@ArgsType()
export class PublicationGroupByArgs {

    @Field(() => PublicationWhereInput, {nullable:true})
    where?: PublicationWhereInput;

    @Field(() => [PublicationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PublicationOrderByWithAggregationInput>;

    @Field(() => [PublicationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PublicationScalarFieldEnum>;

    @Field(() => PublicationScalarWhereWithAggregatesInput, {nullable:true})
    having?: PublicationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PublicationCountAggregateInput, {nullable:true})
    _count?: PublicationCountAggregateInput;

    @Field(() => PublicationAvgAggregateInput, {nullable:true})
    _avg?: PublicationAvgAggregateInput;

    @Field(() => PublicationSumAggregateInput, {nullable:true})
    _sum?: PublicationSumAggregateInput;

    @Field(() => PublicationMinAggregateInput, {nullable:true})
    _min?: PublicationMinAggregateInput;

    @Field(() => PublicationMaxAggregateInput, {nullable:true})
    _max?: PublicationMaxAggregateInput;
}
