import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';

@ArgsType()
export class DeleteManyLanguageArgs {

    @Field(() => LanguageWhereInput, {nullable:true})
    where?: LanguageWhereInput;
}
