import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { currencyList } from 'src/app/shared/utils/currency-code-name';

@Component({
  selector: 'app-nav-title',
  templateUrl: './nav-title.component.html',
  styleUrls: ['./nav-title.component.scss'],
})
export class NavTitleComponent implements OnInit {
  @Output() getData = new EventEmitter();
  inDetailesMode: boolean = false;
  code!: Params;
  currencyName!: { name: string; code: string } | any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      this.code = param['chart'];
      this.code ? (this.inDetailesMode = true) : (this.inDetailesMode = false);
      this.showCurrencyName();
    });
  }

  showCurrencyName() {
    this.currencyName = currencyList.find((el: any) => {
      return el.code === this.code;
    });
  }

  backToHome() {
    this.router.navigate(['/']);
    this.getData.emit();
  }
}
