import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class RegistrationWhereInput {

    @Field(() => [RegistrationWhereInput], {nullable:true})
    AND?: Array<RegistrationWhereInput>;

    @Field(() => [RegistrationWhereInput], {nullable:true})
    OR?: Array<RegistrationWhereInput>;

    @Field(() => [RegistrationWhereInput], {nullable:true})
    NOT?: Array<RegistrationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;
}
