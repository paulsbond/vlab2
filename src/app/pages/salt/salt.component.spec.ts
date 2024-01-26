import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltComponent } from './salt.component';

describe('SaltComponent', () => {
  let component: SaltComponent;
  let fixture: ComponentFixture<SaltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaltComponent]
    });
    fixture = TestBed.createComponent(SaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
