import { Test, TestingModule } from '@nestjs/testing';

import { DatabaseService } from '../database/database.service';
import { PipelinesResolver } from './pipelines.resolver';

describe('PipelinesResolver', () => {
  let resolver: PipelinesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipelinesResolver, DatabaseService]
    }).compile();

    resolver = module.get<PipelinesResolver>(PipelinesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
