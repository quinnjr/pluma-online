import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthResponse {
  @Field({ nullable: false })
  accessToken!: string;
}
