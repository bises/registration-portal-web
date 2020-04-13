import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdhyogRegistrationComponent } from './udhyog-registration.component';

describe('UdhyogRegistrationComponent', () => {
  let component: UdhyogRegistrationComponent;
  let fixture: ComponentFixture<UdhyogRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdhyogRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdhyogRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
