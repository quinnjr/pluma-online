import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPipelineStatusFilter } from '../prisma/enum-pipeline-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PipelineScalarWhereInput {

    @Field(() => [PipelineScalarWhereInput], {nullable:true})
    AND?: Array<PipelineScalarWhereInput>;

    @Field(() => [PipelineScalarWhereInput], {nullable:true})
    OR?: Array<PipelineScalarWhereInput>;

    @Field(() => [PipelineScalarWhereInput], {nullable:true})
    NOT?: Array<PipelineScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    githubUrl?: StringFilter;

    @Field(() => EnumPipelineStatusFilter, {nullable:true})
    status?: EnumPipelineStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
