import { TestBed } from '@angular/core/testing';

import { SendEmailManagementService } from './send-email-management.service';

describe('SendEmailManagementService', () => {
  let service: SendEmailManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEmailManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
