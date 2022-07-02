import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPipelineStatusWithAggregatesFilter } from '../prisma/enum-pipeline-status-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PipelineScalarWhereWithAggregatesInput {

    @Field(() => [PipelineScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PipelineScalarWhereWithAggregatesInput>;

    @Field(() => [PipelineScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PipelineScalarWhereWithAggregatesInput>;

    @Field(() => [PipelineScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PipelineScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    githubUrl?: StringWithAggregatesFilter;

    @Field(() => EnumPipelineStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPipelineStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rating?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;
}
