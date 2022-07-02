import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutParentInput } from './comment-unchecked-update-many-without-parent.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CommentUncheckedUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    parentId?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: CommentUncheckedUpdateManyWithoutParentInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    pluginId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
