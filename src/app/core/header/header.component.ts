import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SetDefaultService } from 'src/app/shared/services/set-default.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private setDefaultService: SetDefaultService,
    private router: Router
  ) {}

  goToDetailes(currency1: string, currency2: string) {
    this.router.navigate(['/detailes'], {
      queryParams: { chart: currency1 },
    });
    this.setDefaultService.setDefaults({ currency1, currency2 });
  }
}
