import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateManyCategoryInput } from './plugin-create-many-category.input';

@InputType()
export class PluginCreateManyCategoryInputEnvelope {

    @Field(() => [PluginCreateManyCategoryInput], {nullable:false})
    data!: Array<PluginCreateManyCategoryInput>;
}
