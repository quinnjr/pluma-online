import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@ArgsType()
export class DeleteOnePublicationArgs {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    where!: PublicationWhereUniqueInput;
}
