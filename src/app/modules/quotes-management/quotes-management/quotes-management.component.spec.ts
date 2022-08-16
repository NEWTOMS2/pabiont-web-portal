import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesManagementComponent } from './quotes-management.component';

describe('QuotesManagementComponent', () => {
  let component: QuotesManagementComponent;
  let fixture: ComponentFixture<QuotesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
