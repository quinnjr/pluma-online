import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Registration {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    /**
     * HideField()
     */
    @Field(() => String, {nullable:false,description:'HideField()'})
    code!: string;
}
