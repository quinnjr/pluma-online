import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PluginStatus } from './plugin-status.enum';

@InputType()
export class EnumPluginStatusFieldUpdateOperationsInput {

    @Field(() => PluginStatus, {nullable:true})
    set?: keyof typeof PluginStatus;
}
