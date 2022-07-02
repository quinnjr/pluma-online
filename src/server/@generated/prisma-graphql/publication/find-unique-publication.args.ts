import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@ArgsType()
export class FindUniquePublicationArgs {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    where!: PublicationWhereUniqueInput;
}
