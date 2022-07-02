import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@ArgsType()
export class FindUniqueCategoryArgs {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;
}
