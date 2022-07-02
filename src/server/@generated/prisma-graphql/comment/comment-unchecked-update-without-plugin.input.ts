import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutParentInput } from './comment-unchecked-update-many-without-parent.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CommentUncheckedUpdateWithoutPluginInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    parentId?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: CommentUncheckedUpdateManyWithoutParentInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
