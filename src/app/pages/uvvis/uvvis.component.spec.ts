import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvvisComponent } from './uvvis.component';

describe('UvvisComponent', () => {
  let component: UvvisComponent;
  let fixture: ComponentFixture<UvvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UvvisComponent]
    });
    fixture = TestBed.createComponent(UvvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
