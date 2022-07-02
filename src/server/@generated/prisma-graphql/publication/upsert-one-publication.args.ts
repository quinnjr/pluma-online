import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { PublicationCreateInput } from './publication-create.input';
import { PublicationUpdateInput } from './publication-update.input';

@ArgsType()
export class UpsertOnePublicationArgs {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    where!: PublicationWhereUniqueInput;

    @Field(() => PublicationCreateInput, {nullable:false})
    create!: PublicationCreateInput;

    @Field(() => PublicationUpdateInput, {nullable:false})
    update!: PublicationUpdateInput;
}
