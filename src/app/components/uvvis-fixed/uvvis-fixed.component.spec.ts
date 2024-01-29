import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvvisFixedComponent } from './uvvis-fixed.component';

describe('UvvisFixedComponent', () => {
  let component: UvvisFixedComponent;
  let fixture: ComponentFixture<UvvisFixedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UvvisFixedComponent]
    });
    fixture = TestBed.createComponent(UvvisFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
