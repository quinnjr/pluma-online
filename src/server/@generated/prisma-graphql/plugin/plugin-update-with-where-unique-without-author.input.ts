import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutAuthorInput } from './plugin-update-without-author.input';

@InputType()
export class PluginUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutAuthorInput, {nullable:false})
    data!: PluginUpdateWithoutAuthorInput;
}
