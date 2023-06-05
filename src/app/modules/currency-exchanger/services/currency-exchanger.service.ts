import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icurruncies } from 'src/app/shared/models/currencies';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangerService {


  baseUrl = environment.baseUrl;
  accessToken = '3f787eef7a81f861d36ed0d7f240946a';
  constructor(private http: HttpClient) {}

  getCurreciesDropDown() {
    return this.http.get<Icurruncies>(
      this.baseUrl + `/latest?access_key=${this.accessToken}`
    );
  }
}
