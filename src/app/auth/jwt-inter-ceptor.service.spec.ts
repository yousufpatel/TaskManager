import { TestBed } from '@angular/core/testing';

import { JWtInterCeptorService } from './jwt-inter-ceptor.service';

describe('JWtInterCeptorService', () => {
  let service: JWtInterCeptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWtInterCeptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
