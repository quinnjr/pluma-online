import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPluginsInput } from './category-create-without-plugins.input';
import { CategoryCreateOrConnectWithoutPluginsInput } from './category-create-or-connect-without-plugins.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutPluginsInput {

    @Field(() => CategoryCreateWithoutPluginsInput, {nullable:true})
    create?: CategoryCreateWithoutPluginsInput;

    @Field(() => CategoryCreateOrConnectWithoutPluginsInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutPluginsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;
}
