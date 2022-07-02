import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Plugin } from '../plugin/plugin.model';
import { LanguageCount } from './language-count.output';

@ObjectType()
export class Language {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Plugin], {nullable:true})
    plugins?: Array<Plugin>;

    @Field(() => LanguageCount, {nullable:false})
    _count?: LanguageCount;
}
