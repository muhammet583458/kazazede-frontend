import { TestBed } from '@angular/core/testing';

import { SuffererService } from './sufferer.service';

describe('SuffererService', () => {
  let service: SuffererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuffererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
