import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class PublicationWhereInput {

    @Field(() => [PublicationWhereInput], {nullable:true})
    AND?: Array<PublicationWhereInput>;

    @Field(() => [PublicationWhereInput], {nullable:true})
    OR?: Array<PublicationWhereInput>;

    @Field(() => [PublicationWhereInput], {nullable:true})
    NOT?: Array<PublicationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authors?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    publishedYear?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    journal?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    journalVolume?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    journalIssue?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    pageRange?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    doi?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isNew?: BoolFilter;
}
