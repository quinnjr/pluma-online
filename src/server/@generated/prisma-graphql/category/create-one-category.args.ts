import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryCreateInput } from './category-create.input';

@ArgsType()
export class CreateOneCategoryArgs {

    @Field(() => CategoryCreateInput, {nullable:false})
    data!: CategoryCreateInput;
}
