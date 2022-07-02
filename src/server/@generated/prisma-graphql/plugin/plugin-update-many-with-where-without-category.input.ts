import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginScalarWhereInput } from './plugin-scalar-where.input';
import { PluginUpdateManyMutationInput } from './plugin-update-many-mutation.input';

@InputType()
export class PluginUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => PluginScalarWhereInput, {nullable:false})
    where!: PluginScalarWhereInput;

    @Field(() => PluginUpdateManyMutationInput, {nullable:false})
    data!: PluginUpdateManyMutationInput;
}
