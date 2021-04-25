import { TestBed } from '@angular/core/testing';

import { NepaliDateService } from './nepali-date.service';

describe('NepaliDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NepaliDateService = TestBed.get(NepaliDateService);
    expect(service).toBeTruthy();
  });
});
