import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { LanguageOrderByWithRelationInput } from './language-order-by-with-relation.input';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguageScalarFieldEnum } from './language-scalar-field.enum';

@ArgsType()
export class FindFirstLanguageArgs {

    @Field(() => LanguageWhereInput, {nullable:true})
    where?: LanguageWhereInput;

    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: LanguageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LanguageScalarFieldEnum>;
}
