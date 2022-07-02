import { GqlJwtAuthGuard } from './gql-jwt-auth.guard';

describe('GqlLocalAuthGuard', () => {
  it('should be defined', () => {
    expect(new GqlJwtAuthGuard()).toBeDefined();
  });
});
