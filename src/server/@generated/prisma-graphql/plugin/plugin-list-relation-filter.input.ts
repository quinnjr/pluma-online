import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereInput } from './plugin-where.input';

@InputType()
export class PluginListRelationFilter {

    @Field(() => PluginWhereInput, {nullable:true})
    every?: PluginWhereInput;

    @Field(() => PluginWhereInput, {nullable:true})
    some?: PluginWhereInput;

    @Field(() => PluginWhereInput, {nullable:true})
    none?: PluginWhereInput;
}
