import { TestBed } from '@angular/core/testing';

import { WarehouseManagementService } from './warehouse-management.service';

describe('WarehouseManagementService', () => {
  let service: WarehouseManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
