import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginCreateInput } from './plugin-create.input';

@ArgsType()
export class CreateOnePluginArgs {

    @Field(() => PluginCreateInput, {nullable:false})
    data!: PluginCreateInput;
}
