import { TestingModule, Test } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from './casl-ability.factory';
import { PoliciesGuard } from './policies.guard';

describe('PoliciesGuard', () => {
  let guard: PoliciesGuard;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliciesGuard, CaslAbilityFactory, Reflector]
    }).compile();

    guard = module.get<PoliciesGuard>(PoliciesGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
