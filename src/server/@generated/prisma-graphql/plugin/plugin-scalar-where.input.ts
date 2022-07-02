import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPluginStatusFilter } from '../prisma/enum-plugin-status-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PluginScalarWhereInput {

    @Field(() => [PluginScalarWhereInput], {nullable:true})
    AND?: Array<PluginScalarWhereInput>;

    @Field(() => [PluginScalarWhereInput], {nullable:true})
    OR?: Array<PluginScalarWhereInput>;

    @Field(() => [PluginScalarWhereInput], {nullable:true})
    NOT?: Array<PluginScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    githubUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;

    @Field(() => EnumPluginStatusFilter, {nullable:true})
    verification?: EnumPluginStatusFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
