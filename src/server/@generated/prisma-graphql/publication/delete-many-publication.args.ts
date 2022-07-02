import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';

@ArgsType()
export class DeleteManyPublicationArgs {

    @Field(() => PublicationWhereInput, {nullable:true})
    where?: PublicationWhereInput;
}
