import { Test, TestingModule } from '@nestjs/testing';
import { PluginsResolver } from './plugins.resolver';

describe('PluginsResolver', () => {
  let resolver: PluginsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PluginsResolver],
    }).compile();

    resolver = module.get<PluginsResolver>(PluginsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
