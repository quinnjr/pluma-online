import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutParentInput } from './comment-unchecked-create-nested-many-without-parent.input';

@InputType()
export class CommentUncheckedCreateWithoutPluginInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    parentId!: string;

    @Field(() => CommentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CommentUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
