import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Verify {
  @Field({ nullable: false })
  public verified!: boolean;

  constructor(v: boolean) {
    this.verified = v;
  }
}
