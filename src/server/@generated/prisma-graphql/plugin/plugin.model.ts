import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Language } from '../language/language.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { PluginStatus } from '../prisma/plugin-status.enum';
import { Comment } from '../comment/comment.model';
import { PluginCount } from './plugin-count.output';

@ObjectType()
export class Plugin {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => Language, {nullable:false})
    language?: Language;

    @Field(() => String, {nullable:false})
    languageId!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    rating!: number;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => String, {nullable:true})
    authorId!: string | null;

    @Field(() => PluginStatus, {nullable:false,defaultValue:'Unverified'})
    verification!: keyof typeof PluginStatus;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => PluginCount, {nullable:false})
    _count?: PluginCount;
}
