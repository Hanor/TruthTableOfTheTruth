import { TestBed, inject } from '@angular/core/testing';

import { TruthService } from './truth.service';

describe('TruthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruthService]
    });
  });

  it('should be created', inject([TruthService], (service: TruthService) => {
    expect(service).toBeTruthy();
  }));
});
