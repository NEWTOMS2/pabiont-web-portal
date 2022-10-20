import { TestBed } from '@angular/core/testing';

import { RateManagementService } from './rate-management.service';

describe('RateManagementService', () => {
  let service: RateManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
