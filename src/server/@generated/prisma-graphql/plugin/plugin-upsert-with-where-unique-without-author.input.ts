import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { PluginUpdateWithoutAuthorInput } from './plugin-update-without-author.input';
import { PluginCreateWithoutAuthorInput } from './plugin-create-without-author.input';

@InputType()
export class PluginUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => PluginWhereUniqueInput, {nullable:false})
    where!: PluginWhereUniqueInput;

    @Field(() => PluginUpdateWithoutAuthorInput, {nullable:false})
    update!: PluginUpdateWithoutAuthorInput;

    @Field(() => PluginCreateWithoutAuthorInput, {nullable:false})
    create!: PluginCreateWithoutAuthorInput;
}
