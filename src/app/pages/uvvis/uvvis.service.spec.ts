import { TestBed } from '@angular/core/testing';

import { UvvisService } from './uvvis.service';

describe('UvvisService', () => {
  let service: UvvisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvvisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
