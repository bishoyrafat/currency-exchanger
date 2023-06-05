import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedCurrenyService {

  constructor() { }
  selectedCurrency$ = new Subject();

  setCurrency(value: any) {
    this.selectedCurrency$.next(value);
  }

  getCurrency() {
    return this.selectedCurrency$;
  }

}
