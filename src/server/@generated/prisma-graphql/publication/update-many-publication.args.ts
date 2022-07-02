import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationUpdateManyMutationInput } from './publication-update-many-mutation.input';
import { PublicationWhereInput } from './publication-where.input';

@ArgsType()
export class UpdateManyPublicationArgs {

    @Field(() => PublicationUpdateManyMutationInput, {nullable:false})
    data!: PublicationUpdateManyMutationInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    where?: PublicationWhereInput;
}
