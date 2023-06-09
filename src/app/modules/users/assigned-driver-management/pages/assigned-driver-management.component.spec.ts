import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedDriverManagementComponent } from './assigned-driver-management.component';

describe('AssignedDriverManagementComponent', () => {
  let component: AssignedDriverManagementComponent;
  let fixture: ComponentFixture<AssignedDriverManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedDriverManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedDriverManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
