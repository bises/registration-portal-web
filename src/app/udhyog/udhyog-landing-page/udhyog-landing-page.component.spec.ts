import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdhyogLandingPageComponent } from './udhyog-landing-page.component';

describe('UdhyogLandingPageComponent', () => {
  let component: UdhyogLandingPageComponent;
  let fixture: ComponentFixture<UdhyogLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdhyogLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdhyogLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
