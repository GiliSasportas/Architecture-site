import { TestBed } from '@angular/core/testing';

import { GiftserviceService } from './gift.service';

describe('GiftserviceService', () => {
  let service: GiftserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
