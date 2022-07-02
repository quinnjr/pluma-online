import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegistrationWhereInput } from './registration-where.input';

@InputType()
export class RegistrationRelationFilter {

    @Field(() => RegistrationWhereInput, {nullable:true})
    is?: RegistrationWhereInput;

    @Field(() => RegistrationWhereInput, {nullable:true})
    isNot?: RegistrationWhereInput;
}
