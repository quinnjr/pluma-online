import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutPluginsInput } from '../category/category-create-nested-one-without-plugins.input';
import { LanguageCreateNestedOneWithoutPluginsInput } from '../language/language-create-nested-one-without-plugins.input';
import { Int } from '@nestjs/graphql';
import { PluginStatus } from '../prisma/plugin-status.enum';
import { CommentCreateNestedManyWithoutPluginInput } from '../comment/comment-create-nested-many-without-plugin.input';
import { PluginCreatetagsInput } from './plugin-createtags.input';

@InputType()
export class PluginCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CategoryCreateNestedOneWithoutPluginsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutPluginsInput;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => LanguageCreateNestedOneWithoutPluginsInput, {nullable:false})
    language!: LanguageCreateNestedOneWithoutPluginsInput;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => PluginStatus, {nullable:true})
    verification?: keyof typeof PluginStatus;

    @Field(() => CommentCreateNestedManyWithoutPluginInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPluginInput;

    @Field(() => PluginCreatetagsInput, {nullable:true})
    tags?: PluginCreatetagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
