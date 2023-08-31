import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeineComponent } from './caffeine.component';

describe('CaffeineComponent', () => {
  let component: CaffeineComponent;
  let fixture: ComponentFixture<CaffeineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaffeineComponent]
    });
    fixture = TestBed.createComponent(CaffeineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
