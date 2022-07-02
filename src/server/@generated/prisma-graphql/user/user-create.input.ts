import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PluginCreateNestedManyWithoutAuthorInput } from '../plugin/plugin-create-nested-many-without-author.input';
import { PipelineCreateNestedManyWithoutUserInput } from '../pipeline/pipeline-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { RegistrationCreateNestedOneWithoutUserInput } from '../registration/registration-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    passwordHash!: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    institution?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => PluginCreateNestedManyWithoutAuthorInput, {nullable:true})
    plugins?: PluginCreateNestedManyWithoutAuthorInput;

    @Field(() => PipelineCreateNestedManyWithoutUserInput, {nullable:true})
    pipelines?: PipelineCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutAuthorInput;

    @Field(() => RegistrationCreateNestedOneWithoutUserInput, {nullable:true})
    registration?: RegistrationCreateNestedOneWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
