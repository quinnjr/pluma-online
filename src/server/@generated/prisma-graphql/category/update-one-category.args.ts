import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryUpdateInput } from './category-update.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@ArgsType()
export class UpdateOneCategoryArgs {

    @Field(() => CategoryUpdateInput, {nullable:false})
    data!: CategoryUpdateInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;
}
