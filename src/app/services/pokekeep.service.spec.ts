import { TestBed } from '@angular/core/testing';

import { PokekeepService } from './pokekeep.service';

describe('PokekeepService', () => {
  let service: PokekeepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokekeepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
