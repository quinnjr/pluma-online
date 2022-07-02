import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateManyAuthorInput } from './plugin-create-many-author.input';

@InputType()
export class PluginCreateManyAuthorInputEnvelope {

    @Field(() => [PluginCreateManyAuthorInput], {nullable:false})
    data!: Array<PluginCreateManyAuthorInput>;
}
