import { Test, TestingModule } from '@nestjs/testing';
import { ForumCategoryResolver } from './forum-category.resolver';

describe('ForumCategoryResolver', () => {
  let resolver: ForumCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumCategoryResolver],
    }).compile();

    resolver = module.get<ForumCategoryResolver>(ForumCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
