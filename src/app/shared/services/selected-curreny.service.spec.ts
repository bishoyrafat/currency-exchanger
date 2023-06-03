import { TestBed } from '@angular/core/testing';

import { SelectedCurrenyService } from './selected-curreny.service';

describe('SelectedCurrenyService', () => {
  let service: SelectedCurrenyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCurrenyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
