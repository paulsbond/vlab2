import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvvisScanningComponent } from './uvvis-scanning.component';

describe('UvvisScanningComponent', () => {
  let component: UvvisScanningComponent;
  let fixture: ComponentFixture<UvvisScanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UvvisScanningComponent]
    });
    fixture = TestBed.createComponent(UvvisScanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
