import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SetDefaultService {

  constructor() { }
  defaults$ = new Subject();

  setDefaults(value: any) {
    this.defaults$.next(value);
  }

  get defaults() {
    return this.defaults$;
  }
}
