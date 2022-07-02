import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PluginWhereInput } from './plugin-where.input';
import { PluginOrderByWithRelationInput } from './plugin-order-by-with-relation.input';
import { PluginWhereUniqueInput } from './plugin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PluginScalarFieldEnum } from './plugin-scalar-field.enum';

@ArgsType()
export class FindFirstPluginArgs {

    @Field(() => PluginWhereInput, {nullable:true})
    where?: PluginWhereInput;

    @Field(() => [PluginOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PluginOrderByWithRelationInput>;

    @Field(() => PluginWhereUniqueInput, {nullable:true})
    cursor?: PluginWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PluginScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PluginScalarFieldEnum>;
}
