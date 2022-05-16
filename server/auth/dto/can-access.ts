import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CanAccess {
  @Field({ nullable: false })
  public canAccess!: boolean;

  constructor(ability: boolean) {
    this.canAccess = ability;
  }
}
