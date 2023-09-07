import { TestBed } from '@angular/core/testing';

import { RoaldService } from './roald.service';

describe('RoaldService', () => {
  let service: RoaldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoaldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
