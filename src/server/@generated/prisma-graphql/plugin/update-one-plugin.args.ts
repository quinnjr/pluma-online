import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginUpdateInput } from './plugin-update.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';

@ArgsType()
export class UpdateOnePluginArgs {

    @Field(() => PluginUpdateInput, {nullable:false})
    data!: PluginUpdateInput;

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;
}
