import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageCreateManyInput } from './language-create-many.input';

@ArgsType()
export class CreateManyLanguageArgs {

    @Field(() => [LanguageCreateManyInput], {nullable:false})
    data!: Array<LanguageCreateManyInput>;
}
