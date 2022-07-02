import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationUpdateInput } from './publication-update.input';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@ArgsType()
export class UpdateOnePublicationArgs {

    @Field(() => PublicationUpdateInput, {nullable:false})
    data!: PublicationUpdateInput;

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    where!: PublicationWhereUniqueInput;
}
