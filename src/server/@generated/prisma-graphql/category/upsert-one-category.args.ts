import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateInput } from './category-create.input';
import { CategoryUpdateInput } from './category-update.input';

@ArgsType()
export class UpsertOneCategoryArgs {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateInput, {nullable:false})
    create!: CategoryCreateInput;

    @Field(() => CategoryUpdateInput, {nullable:false})
    update!: CategoryUpdateInput;
}
