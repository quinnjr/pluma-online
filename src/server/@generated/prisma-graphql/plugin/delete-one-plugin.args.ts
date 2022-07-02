import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';

@ArgsType()
export class DeleteOnePluginArgs {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;
}
