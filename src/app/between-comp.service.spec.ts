import { TestBed } from '@angular/core/testing';

import { BetweenCompService } from './between-comp.service';

describe('BetweenCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetweenCompService = TestBed.get(BetweenCompService);
    expect(service).toBeTruthy();
  });
});
