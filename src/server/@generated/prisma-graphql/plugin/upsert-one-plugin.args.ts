import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginCreateInput } from './plugin-create.input';
import { PluginUpdateInput } from './plugin-update.input';

@ArgsType()
export class UpsertOnePluginArgs {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginCreateInput, {nullable:false})
    create!: PluginCreateInput;

    @Field(() => PluginUpdateInput, {nullable:false})
    update!: PluginUpdateInput;
}
