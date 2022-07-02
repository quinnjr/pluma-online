import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageCreateInput } from './language-create.input';

@ArgsType()
export class CreateOneLanguageArgs {

    @Field(() => LanguageCreateInput, {nullable:false})
    data!: LanguageCreateInput;
}
