import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutPluginsInput } from './category-create-without-plugins.input';

@InputType()
export class CategoryCreateOrConnectWithoutPluginsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutPluginsInput, {nullable:false})
    create!: CategoryCreateWithoutPluginsInput;
}
