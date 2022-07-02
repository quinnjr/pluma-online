import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
import { LanguageRelationFilter } from '../language/language-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPluginStatusFilter } from '../prisma/enum-plugin-status-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PluginWhereInput {

    @Field(() => [PluginWhereInput], {nullable:true})
    AND?: Array<PluginWhereInput>;

    @Field(() => [PluginWhereInput], {nullable:true})
    OR?: Array<PluginWhereInput>;

    @Field(() => [PluginWhereInput], {nullable:true})
    NOT?: Array<PluginWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    githubUrl?: StringFilter;

    @Field(() => LanguageRelationFilter, {nullable:true})
    language?: LanguageRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    languageId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: StringNullableFilter;

    @Field(() => EnumPluginStatusFilter, {nullable:true})
    verification?: EnumPluginStatusFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
