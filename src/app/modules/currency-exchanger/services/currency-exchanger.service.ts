import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icurruncies } from 'src/app/shared/models/currencies';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangerService {
  baseUrl = environment.baseUrl;
  accessToken = '3b65f014f921b5b6e002e037e2fb3be7'
  constructor(private http: HttpClient) {}

  getCurreciesDropDown() {
    return this.http.get<Icurruncies>(
      this.baseUrl+`/latest?access_key=${this.accessToken}`
    );
  }


}
