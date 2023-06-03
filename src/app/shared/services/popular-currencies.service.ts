import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularCurrenciesService {

  constructor() { }
  popularCurrencies$ = new Subject();

  setCurrency(value: any) {
    this.popularCurrencies$.next(value);
  }

  getCurrency() {
    return this.popularCurrencies$;
  }
}
