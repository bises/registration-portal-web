import { TestBed } from '@angular/core/testing';

import { UdhyogService } from './udhyog.service';

describe('UdhyogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UdhyogService = TestBed.get(UdhyogService);
    expect(service).toBeTruthy();
  });
});
