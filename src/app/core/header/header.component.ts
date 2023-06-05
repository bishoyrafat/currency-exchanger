import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SetDefaultService } from 'src/app/shared/services/set-default.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private setDefaultService: SetDefaultService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  goToDetailes(currency1: string, currency2: string) {
    this.loadingService.load()
    this.router.navigate(['/detailes'], {
      queryParams: { chart: currency1 },fragment:currency2
    });
    this.setDefaultService.setDefaults({ currency1, currency2 });
  }

  goHome() {
    this.loadingService.load()
    this.router.navigate(['/'])
  }
}
