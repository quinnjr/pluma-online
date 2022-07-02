import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPluginStatusFieldUpdateOperationsInput } from '../prisma/enum-plugin-status-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutPluginInput } from '../comment/comment-unchecked-update-many-without-plugin.input';
import { PluginUpdatetagsInput } from './plugin-updatetags.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PluginUncheckedUpdateWithoutCategoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    githubUrl?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    languageId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumPluginStatusFieldUpdateOperationsInput, {nullable:true})
    verification?: EnumPluginStatusFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutPluginInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutPluginInput;

    @Field(() => PluginUpdatetagsInput, {nullable:true})
    tags?: PluginUpdatetagsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
