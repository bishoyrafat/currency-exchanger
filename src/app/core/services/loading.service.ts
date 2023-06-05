import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private spinner: NgxSpinnerService) {}

  show() {
    this.spinner.show();
  }

  hide() {
    this.spinner.hide();
  }

  load(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
    }
}
