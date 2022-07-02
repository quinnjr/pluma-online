import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginStatus } from './plugin-status.enum';
import { NestedEnumPluginStatusFilter } from './nested-enum-plugin-status-filter.input';

@InputType()
export class EnumPluginStatusFilter {

    @Field(() => PluginStatus, {nullable:true})
    equals?: keyof typeof PluginStatus;

    @Field(() => [PluginStatus], {nullable:true})
    in?: Array<keyof typeof PluginStatus>;

    @Field(() => [PluginStatus], {nullable:true})
    notIn?: Array<keyof typeof PluginStatus>;

    @Field(() => NestedEnumPluginStatusFilter, {nullable:true})
    not?: NestedEnumPluginStatusFilter;
}
