import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CommentUpdateOneWithoutChildrenInput } from './comment-update-one-without-children.input';
import { CommentUpdateManyWithoutParentInput } from './comment-update-many-without-parent.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CommentUpdateWithoutPluginInput {

    @Field(() => UserUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutCommentsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUpdateOneWithoutChildrenInput, {nullable:true})
    parent?: CommentUpdateOneWithoutChildrenInput;

    @Field(() => CommentUpdateManyWithoutParentInput, {nullable:true})
    children?: CommentUpdateManyWithoutParentInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
