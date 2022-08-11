import { TestBed } from '@angular/core/testing';

import { TableManagmentService } from './table-managment.service';

describe('TableManagmentService', () => {
  let service: TableManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
