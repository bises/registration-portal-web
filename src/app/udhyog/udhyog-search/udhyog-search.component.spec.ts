import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdhyogSearchComponent } from './udhyog-search.component';

describe('UdhyogSearchComponent', () => {
  let component: UdhyogSearchComponent;
  let fixture: ComponentFixture<UdhyogSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdhyogSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdhyogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
