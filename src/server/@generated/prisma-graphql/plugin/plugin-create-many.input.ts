import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PluginStatus } from '../prisma/plugin-status.enum';
import { PluginCreatetagsInput } from './plugin-createtags.input';

@InputType()
export class PluginCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    githubUrl!: string;

    @Field(() => String, {nullable:false})
    languageId!: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => PluginStatus, {nullable:true})
    verification?: keyof typeof PluginStatus;

    @Field(() => PluginCreatetagsInput, {nullable:true})
    tags?: PluginCreatetagsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
