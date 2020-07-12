import { TestBed } from '@angular/core/testing';

import { CanActivatedGaurdService } from './can-activated-gaurd.service';

describe('CanActivatedGaurdService', () => {
  let service: CanActivatedGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivatedGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
