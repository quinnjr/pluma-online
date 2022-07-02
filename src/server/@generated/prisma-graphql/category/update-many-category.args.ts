import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryUpdateManyMutationInput } from './category-update-many-mutation.input';
import { CategoryWhereInput } from './category-where.input';

@ArgsType()
export class UpdateManyCategoryArgs {

    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    data!: CategoryUpdateManyMutationInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    where?: CategoryWhereInput;
}
