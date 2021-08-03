import { Test, TestingModule } from '@nestjs/testing';
import { LanguagesResolver } from './languages.resolver';

describe('LanguagesResolver', () => {
  let resolver: LanguagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguagesResolver],
    }).compile();

    resolver = module.get<LanguagesResolver>(LanguagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
