import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginStatus } from './plugin-status.enum';
import { NestedEnumPluginStatusWithAggregatesFilter } from './nested-enum-plugin-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPluginStatusFilter } from './nested-enum-plugin-status-filter.input';

@InputType()
export class EnumPluginStatusWithAggregatesFilter {

    @Field(() => PluginStatus, {nullable:true})
    equals?: keyof typeof PluginStatus;

    @Field(() => [PluginStatus], {nullable:true})
    in?: Array<keyof typeof PluginStatus>;

    @Field(() => [PluginStatus], {nullable:true})
    notIn?: Array<keyof typeof PluginStatus>;

    @Field(() => NestedEnumPluginStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPluginStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPluginStatusFilter, {nullable:true})
    _min?: NestedEnumPluginStatusFilter;

    @Field(() => NestedEnumPluginStatusFilter, {nullable:true})
    _max?: NestedEnumPluginStatusFilter;
}
