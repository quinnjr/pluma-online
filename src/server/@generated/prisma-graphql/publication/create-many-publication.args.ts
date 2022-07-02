import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCreateManyInput } from './publication-create-many.input';

@ArgsType()
export class CreateManyPublicationArgs {

    @Field(() => [PublicationCreateManyInput], {nullable:false})
    data!: Array<PublicationCreateManyInput>;
}
