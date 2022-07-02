import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';
import { PublicationOrderByWithRelationInput } from './publication-order-by-with-relation.input';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublicationScalarFieldEnum } from './publication-scalar-field.enum';

@ArgsType()
export class FindManyPublicationArgs {

    @Field(() => PublicationWhereInput, {nullable:true})
    where?: PublicationWhereInput;

    @Field(() => [PublicationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublicationOrderByWithRelationInput>;

    @Field(() => PublicationWhereUniqueInput, {nullable:true})
    cursor?: PublicationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PublicationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PublicationScalarFieldEnum>;
}
