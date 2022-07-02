import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginStatus } from './plugin-status.enum';

@InputType()
export class NestedEnumPluginStatusFilter {

    @Field(() => PluginStatus, {nullable:true})
    equals?: keyof typeof PluginStatus;

    @Field(() => [PluginStatus], {nullable:true})
    in?: Array<keyof typeof PluginStatus>;

    @Field(() => [PluginStatus], {nullable:true})
    notIn?: Array<keyof typeof PluginStatus>;

    @Field(() => NestedEnumPluginStatusFilter, {nullable:true})
    not?: NestedEnumPluginStatusFilter;
}
