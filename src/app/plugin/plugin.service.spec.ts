import { TestBed } from '@angular/core/testing';
import { ApolloModule } from 'apollo-angular';

import { PluginService } from './plugin.service';

describe('PluginService', () => {
  let service: PluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloModule]
    });
    service = TestBed.inject(PluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
