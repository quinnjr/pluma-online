import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Plugin } from '../plugin/plugin.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Comment, {nullable:true})
    parent?: Comment | null;

    @Field(() => String, {nullable:false})
    parentId!: string;

    @Field(() => [Comment], {nullable:true})
    children?: Array<Comment>;

    @Field(() => Plugin, {nullable:false})
    plugin?: Plugin;

    @Field(() => String, {nullable:false})
    pluginId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
