import { TestBed } from '@angular/core/testing';

import { FomrulariosService } from './fomrularios.service';

describe('FomrulariosService', () => {
  let service: FomrulariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FomrulariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
