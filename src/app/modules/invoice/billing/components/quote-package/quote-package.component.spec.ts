import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePackageComponent } from './quote-package.component';

describe('QuotePackageComponent', () => {
  let component: QuotePackageComponent;
  let fixture: ComponentFixture<QuotePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
