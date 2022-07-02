import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CommentRelationFilter } from './comment-relation-filter.input';
import { CommentListRelationFilter } from './comment-list-relation-filter.input';
import { PluginRelationFilter } from '../plugin/plugin-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentWhereInput {

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => CommentRelationFilter, {nullable:true})
    parent?: CommentRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    parentId?: StringFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    children?: CommentListRelationFilter;

    @Field(() => PluginRelationFilter, {nullable:true})
    plugin?: PluginRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    pluginId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
