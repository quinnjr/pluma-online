import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CategoryUpdateOneRequiredWithoutPluginsInput } from '../category/category-update-one-required-without-plugins.input';
import { LanguageUpdateOneRequiredWithoutPluginsInput } from '../language/language-update-one-required-without-plugins.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneWithoutPluginsInput } from '../user/user-update-one-without-plugins.input';
import { EnumPluginStatusFieldUpdateOperationsInput } from '../prisma/enum-plugin-status-field-update-operations.input';
import { CommentUpdateManyWithoutPluginInput } from '../comment/comment-update-many-without-plugin.input';
import { PluginUpdatetagsInput } from './plugin-updatetags.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PluginUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneRequiredWithoutPluginsInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutPluginsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    githubUrl?: StringFieldUpdateOperationsInput;

    @Field(() => LanguageUpdateOneRequiredWithoutPluginsInput, {nullable:true})
    language?: LanguageUpdateOneRequiredWithoutPluginsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutPluginsInput, {nullable:true})
    author?: UserUpdateOneWithoutPluginsInput;

    @Field(() => EnumPluginStatusFieldUpdateOperationsInput, {nullable:true})
    verification?: EnumPluginStatusFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutPluginInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPluginInput;

    @Field(() => PluginUpdatetagsInput, {nullable:true})
    tags?: PluginUpdatetagsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
