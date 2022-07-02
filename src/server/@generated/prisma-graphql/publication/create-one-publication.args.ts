import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCreateInput } from './publication-create.input';

@ArgsType()
export class CreateOnePublicationArgs {

    @Field(() => PublicationCreateInput, {nullable:false})
    data!: PublicationCreateInput;
}
