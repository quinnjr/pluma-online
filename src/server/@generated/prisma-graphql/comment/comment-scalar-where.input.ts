import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentScalarWhereInput {

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    parentId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pluginId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
