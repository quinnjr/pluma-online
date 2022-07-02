import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegistrationWhereInput } from './registration-where.input';
import { RegistrationOrderByWithRelationInput } from './registration-order-by-with-relation.input';
import { RegistrationWhereUniqueInput } from './registration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegistrationScalarFieldEnum } from './registration-scalar-field.enum';

@ArgsType()
export class FindFirstRegistrationArgs {

    @Field(() => RegistrationWhereInput, {nullable:true})
    where?: RegistrationWhereInput;

    @Field(() => [RegistrationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegistrationOrderByWithRelationInput>;

    @Field(() => RegistrationWhereUniqueInput, {nullable:true})
    cursor?: RegistrationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RegistrationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RegistrationScalarFieldEnum>;
}
