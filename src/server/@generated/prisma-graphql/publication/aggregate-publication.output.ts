import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PublicationCountAggregate } from './publication-count-aggregate.output';
import { PublicationAvgAggregate } from './publication-avg-aggregate.output';
import { PublicationSumAggregate } from './publication-sum-aggregate.output';
import { PublicationMinAggregate } from './publication-min-aggregate.output';
import { PublicationMaxAggregate } from './publication-max-aggregate.output';

@ObjectType()
export class AggregatePublication {

    @Field(() => PublicationCountAggregate, {nullable:true})
    _count?: PublicationCountAggregate;

    @Field(() => PublicationAvgAggregate, {nullable:true})
    _avg?: PublicationAvgAggregate;

    @Field(() => PublicationSumAggregate, {nullable:true})
    _sum?: PublicationSumAggregate;

    @Field(() => PublicationMinAggregate, {nullable:true})
    _min?: PublicationMinAggregate;

    @Field(() => PublicationMaxAggregate, {nullable:true})
    _max?: PublicationMaxAggregate;
}
