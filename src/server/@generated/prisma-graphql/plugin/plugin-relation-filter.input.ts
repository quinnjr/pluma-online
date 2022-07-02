import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereInput } from './plugin-where.input';

@InputType()
export class PluginRelationFilter {

    @Field(() => PluginWhereInput, {nullable:true})
    is?: PluginWhereInput;

    @Field(() => PluginWhereInput, {nullable:true})
    isNot?: PluginWhereInput;
}
