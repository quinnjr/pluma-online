import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RegistrationScalarWhereWithAggregatesInput {

    @Field(() => [RegistrationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RegistrationScalarWhereWithAggregatesInput>;

    @Field(() => [RegistrationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RegistrationScalarWhereWithAggregatesInput>;

    @Field(() => [RegistrationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RegistrationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;
}
