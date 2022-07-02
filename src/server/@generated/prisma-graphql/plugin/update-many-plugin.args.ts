import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginUpdateManyMutationInput } from './plugin-update-many-mutation.input';
import { PluginWhereInput } from './plugin-where.input';

@ArgsType()
export class UpdateManyPluginArgs {

    @Field(() => PluginUpdateManyMutationInput, {nullable:false})
    data!: PluginUpdateManyMutationInput;

    @Field(() => PluginWhereInput, {nullable:true})
    where?: PluginWhereInput;
}
