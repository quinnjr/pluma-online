import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../database/database.service';
import { CategoryResolver } from './category.resolver';

describe('CategoryResolver', () => {
  let resolver: CategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryResolver, DatabaseService]
    }).compile();

    resolver = module.get<CategoryResolver>(CategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
