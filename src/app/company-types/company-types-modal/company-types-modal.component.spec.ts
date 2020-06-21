import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTypesModalComponent } from './company-types-modal.component';

describe('CompanyTypesModalComponent', () => {
  let component: CompanyTypesModalComponent;
  let fixture: ComponentFixture<CompanyTypesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTypesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTypesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
