import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginCreateWithoutAuthorInput } from './plugin-create-without-author.input';
import { PluginCreateOrConnectWithoutAuthorInput } from './plugin-create-or-connect-without-author.input';
import { PluginCreateManyAuthorInputEnvelope } from './plugin-create-many-author-input-envelope.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';

@InputType()
export class PluginUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [PluginCreateWithoutAuthorInput], {nullable:true})
    create?: Array<PluginCreateWithoutAuthorInput>;

    @Field(() => [PluginCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<PluginCreateOrConnectWithoutAuthorInput>;

    @Field(() => PluginCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: PluginCreateManyAuthorInputEnvelope;

    @Field(() => [PluginWhereUniqueInput], {nullable:true})
    connect?: Array<PluginWhereUniqueInput>;
}
