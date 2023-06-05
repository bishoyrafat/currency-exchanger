import { TestBed } from '@angular/core/testing';

import { SetDefaultService } from './set-default.service';

describe('SetDefaultService', () => {
  let service: SetDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
