import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  show() {
    this.spinner.show();
  }

  hide() {
    this.spinner.hide();
  }

  load() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
  showSuccess() {
    this.toastr.success('');
  }
}
