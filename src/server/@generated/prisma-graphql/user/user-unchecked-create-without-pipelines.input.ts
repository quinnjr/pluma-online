import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { PluginUncheckedCreateNestedManyWithoutAuthorInput } from '../plugin/plugin-unchecked-create-nested-many-without-author.input';
import { CommentUncheckedCreateNestedManyWithoutAuthorInput } from '../comment/comment-unchecked-create-nested-many-without-author.input';
import { RegistrationUncheckedCreateNestedOneWithoutUserInput } from '../registration/registration-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPipelinesInput {

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

    @Field(() => PluginUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    plugins?: PluginUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => RegistrationUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    registration?: RegistrationUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
