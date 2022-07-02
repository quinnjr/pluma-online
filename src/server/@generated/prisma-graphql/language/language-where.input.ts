import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PluginListRelationFilter } from '../plugin/plugin-list-relation-filter.input';

@InputType()
export class LanguageWhereInput {

    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => PluginListRelationFilter, {nullable:true})
    plugins?: PluginListRelationFilter;
}
