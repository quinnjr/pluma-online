import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RegistrationCountAggregate } from './registration-count-aggregate.output';
import { RegistrationMinAggregate } from './registration-min-aggregate.output';
import { RegistrationMaxAggregate } from './registration-max-aggregate.output';

@ObjectType()
export class AggregateRegistration {

    @Field(() => RegistrationCountAggregate, {nullable:true})
    _count?: RegistrationCountAggregate;

    @Field(() => RegistrationMinAggregate, {nullable:true})
    _min?: RegistrationMinAggregate;

    @Field(() => RegistrationMaxAggregate, {nullable:true})
    _max?: RegistrationMaxAggregate;
}
