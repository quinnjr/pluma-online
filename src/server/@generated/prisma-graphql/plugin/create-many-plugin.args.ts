import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginCreateManyInput } from './plugin-create-many.input';

@ArgsType()
export class CreateManyPluginArgs {

    @Field(() => [PluginCreateManyInput], {nullable:false})
    data!: Array<PluginCreateManyInput>;
}
