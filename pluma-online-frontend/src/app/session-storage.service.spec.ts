import { TestBed } from '@angular/core/testing';

import { CacheService } from './session-storage.service';

describe('SessionStorageService', () => {
  let service: CacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
