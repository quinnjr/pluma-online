import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginWhereInput } from './plugin-where.input';
import { PluginOrderByWithAggregationInput } from './plugin-order-by-with-aggregation.input';
import { PluginScalarFieldEnum } from './plugin-scalar-field.enum';
import { PluginScalarWhereWithAggregatesInput } from './plugin-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PluginCountAggregateInput } from './plugin-count-aggregate.input';
import { PluginAvgAggregateInput } from './plugin-avg-aggregate.input';
import { PluginSumAggregateInput } from './plugin-sum-aggregate.input';
import { PluginMinAggregateInput } from './plugin-min-aggregate.input';
import { PluginMaxAggregateInput } from './plugin-max-aggregate.input';

@ArgsType()
export class PluginGroupByArgs {

    @Field(() => PluginWhereInput, {nullable:true})
    where?: PluginWhereInput;

    @Field(() => [PluginOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PluginOrderByWithAggregationInput>;

    @Field(() => [PluginScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PluginScalarFieldEnum>;

    @Field(() => PluginScalarWhereWithAggregatesInput, {nullable:true})
    having?: PluginScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PluginCountAggregateInput, {nullable:true})
    _count?: PluginCountAggregateInput;

    @Field(() => PluginAvgAggregateInput, {nullable:true})
    _avg?: PluginAvgAggregateInput;

    @Field(() => PluginSumAggregateInput, {nullable:true})
    _sum?: PluginSumAggregateInput;

    @Field(() => PluginMinAggregateInput, {nullable:true})
    _min?: PluginMinAggregateInput;

    @Field(() => PluginMaxAggregateInput, {nullable:true})
    _max?: PluginMaxAggregateInput;
}
