import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutPluginsInput } from './category-update-without-plugins.input';
import { CategoryCreateWithoutPluginsInput } from './category-create-without-plugins.input';

@InputType()
export class CategoryUpsertWithoutPluginsInput {

    @Field(() => CategoryUpdateWithoutPluginsInput, {nullable:false})
    update!: CategoryUpdateWithoutPluginsInput;

    @Field(() => CategoryCreateWithoutPluginsInput, {nullable:false})
    create!: CategoryCreateWithoutPluginsInput;
}
