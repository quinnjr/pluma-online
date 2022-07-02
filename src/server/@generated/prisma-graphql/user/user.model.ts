import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Plugin } from '../plugin/plugin.model';
import { Pipeline } from '../pipeline/pipeline.model';
import { Comment } from '../comment/comment.model';
import { Registration } from '../registration/registration.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    passwordHash!: string;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    institution!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => Role, {nullable:false,defaultValue:'User'})
    role!: keyof typeof Role;

    @Field(() => [Plugin], {nullable:true})
    plugins?: Array<Plugin>;

    @Field(() => [Pipeline], {nullable:true})
    pipelines?: Array<Pipeline>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @HideField()
    registration?: Registration | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    enabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
