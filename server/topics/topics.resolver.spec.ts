import { Test, TestingModule } from '@nestjs/testing';
import { TopicsResolver } from './topics.resolver';

describe('TopicsResolver', () => {
  let resolver: TopicsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopicsResolver],
    }).compile();

    resolver = module.get<TopicsResolver>(TopicsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
