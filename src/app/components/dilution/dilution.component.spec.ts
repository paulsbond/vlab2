import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilutionComponent } from './dilution.component';

describe('DilutionComponent', () => {
  let component: DilutionComponent;
  let fixture: ComponentFixture<DilutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilutionComponent]
    });
    fixture = TestBed.createComponent(DilutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
