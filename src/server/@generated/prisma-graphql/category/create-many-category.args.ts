import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryCreateManyInput } from './category-create-many.input';

@ArgsType()
export class CreateManyCategoryArgs {

    @Field(() => [CategoryCreateManyInput], {nullable:false})
    data!: Array<CategoryCreateManyInput>;
}
