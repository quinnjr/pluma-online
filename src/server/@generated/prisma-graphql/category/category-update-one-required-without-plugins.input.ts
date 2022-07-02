import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPluginsInput } from './category-create-without-plugins.input';
import { CategoryCreateOrConnectWithoutPluginsInput } from './category-create-or-connect-without-plugins.input';
import { CategoryUpsertWithoutPluginsInput } from './category-upsert-without-plugins.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutPluginsInput } from './category-update-without-plugins.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutPluginsInput {

    @Field(() => CategoryCreateWithoutPluginsInput, {nullable:true})
    create?: CategoryCreateWithoutPluginsInput;

    @Field(() => CategoryCreateOrConnectWithoutPluginsInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutPluginsInput;

    @Field(() => CategoryUpsertWithoutPluginsInput, {nullable:true})
    upsert?: CategoryUpsertWithoutPluginsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutPluginsInput, {nullable:true})
    update?: CategoryUpdateWithoutPluginsInput;
}
