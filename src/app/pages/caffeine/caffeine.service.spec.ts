import { TestBed } from '@angular/core/testing';

import { CaffeineService } from './caffeine.service';

describe('CaffeineService', () => {
  let service: CaffeineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaffeineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
