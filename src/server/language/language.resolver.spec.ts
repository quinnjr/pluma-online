import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from '../database/database.service';
import { LanguageResolver } from './language.resolver';

describe('LanguageResolver', () => {
  let resolver: LanguageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageResolver, DatabaseService]
    }).compile();

    resolver = module.get<LanguageResolver>(LanguageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
