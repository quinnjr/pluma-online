import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginWhereInput } from './plugin-where.input';

@ArgsType()
export class DeleteManyPluginArgs {

    @Field(() => PluginWhereInput, {nullable:true})
    where?: PluginWhereInput;
}
