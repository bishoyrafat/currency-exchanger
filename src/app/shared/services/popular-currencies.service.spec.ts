import { TestBed } from '@angular/core/testing';

import { PopularCurrenciesService } from './popular-currencies.service';

describe('PopularCurrenciesService', () => {
  let service: PopularCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
