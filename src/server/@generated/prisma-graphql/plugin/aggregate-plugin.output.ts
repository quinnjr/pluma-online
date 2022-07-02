import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PluginCountAggregate } from './plugin-count-aggregate.output';
import { PluginAvgAggregate } from './plugin-avg-aggregate.output';
import { PluginSumAggregate } from './plugin-sum-aggregate.output';
import { PluginMinAggregate } from './plugin-min-aggregate.output';
import { PluginMaxAggregate } from './plugin-max-aggregate.output';

@ObjectType()
export class AggregatePlugin {

    @Field(() => PluginCountAggregate, {nullable:true})
    _count?: PluginCountAggregate;

    @Field(() => PluginAvgAggregate, {nullable:true})
    _avg?: PluginAvgAggregate;

    @Field(() => PluginSumAggregate, {nullable:true})
    _sum?: PluginSumAggregate;

    @Field(() => PluginMinAggregate, {nullable:true})
    _min?: PluginMinAggregate;

    @Field(() => PluginMaxAggregate, {nullable:true})
    _max?: PluginMaxAggregate;
}
