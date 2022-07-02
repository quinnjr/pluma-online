import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageUpdateManyMutationInput } from './language-update-many-mutation.input';
import { LanguageWhereInput } from './language-where.input';

@ArgsType()
export class UpdateManyLanguageArgs {

    @Field(() => LanguageUpdateManyMutationInput, {nullable:false})
    data!: LanguageUpdateManyMutationInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    where?: LanguageWhereInput;
}
