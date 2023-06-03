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
  accessToken = 'ae4fbfa6b3443733a4d0c17d468ace8b';
  constructor(private http: HttpClient) {}

  getCurreciesDropDown() {
    return this.http.get<Icurruncies>(
      this.baseUrl + `/latest?access_key=${this.accessToken}`
    );
  }
}
