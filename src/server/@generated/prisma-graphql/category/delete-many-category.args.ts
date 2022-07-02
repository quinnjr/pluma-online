import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';

@ArgsType()
export class DeleteManyCategoryArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    where?: CategoryWhereInput;
}
