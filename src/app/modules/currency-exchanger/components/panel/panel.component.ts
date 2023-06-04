import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Icurruncies } from 'src/app/shared/models/currencies';
import { PopularCurrenciesService } from 'src/app/shared/services/popular-currencies.service';
import { SelectedCurrenyService } from 'src/app/shared/services/selected-curreny.service';
import { SetDefaultService } from 'src/app/shared/services/set-default.service';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  fromDisabled: boolean = true;
  toDisabled: boolean = true;
  inDetailesMode: boolean = false;
  panelForm!: FormGroup;
  currenciesNames: [string, number][] = [];
  fromvalue: any;
  tovalue: any;
  formattedBody: any = [];
  convertedValue!: number;
  convertedFromUnit!: string;
  convertedToUnit!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private currencyExchangerService: CurrencyExchangerService,
    private popularCurrenciesService: PopularCurrenciesService,
    private selectedCurrenyService: SelectedCurrenyService,
    private setDefaultService: SetDefaultService
  ) {}

  createForm() {
    this.panelForm = new FormGroup({
      amount: new FormControl(),
      from: new FormControl('EUR'),
      to: new FormControl('USD'),
    });
  }

  get Amount() {
    return this.panelForm.get('amount');
  }
  get From() {
    return this.panelForm.get('from');
  }
  get To() {
    return this.panelForm.get('to');
  }

  ngOnInit() {
    this.getCurreciesDropDown();
    this.createForm();
    this.Amount?.valueChanges.subscribe((val: number) => {
      if (val) {
        this.toDisabled = false;
        this.fromDisabled = false;
      } else {
        this.toDisabled = true;
        this.fromDisabled = true;
      }
    });
    this.checkUrlQuery();
    this.getDefaults();
  }

  getDefaults() {
    this.setDefaultService.defaults.subscribe((data:any)=>{
      this.From?.setValue(data.currency1)
      this.To?.setValue(data.currency2)

    })
  }

  checkUrlQuery() {
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      param['chart']
        ? (this.inDetailesMode = true)
        : (this.inDetailesMode = false);
      param['chart'] ? (this.fromDisabled = true) : (this.fromDisabled = false);
    });
  }

  navigateToDetailes() {
    this.router.navigate(['/detailes'], {
      queryParams: { chart: this.From?.value },
    });
  }

  getCurreciesDropDown() {
    this.currencyExchangerService
      .getCurreciesDropDown()
      .subscribe((data: Icurruncies) => {
        Object.entries(data.rates || {}).forEach((el: any) => {
          this.formattedBody.push({
            name: el[0],
            value: el[1],
          });

          this.popularCurrenciesService.setCurrency(this.formattedBody);
        });
      });
  }

  fromValue() {
    let returnedFromValue = this.formattedBody.find((el: any) => {
      return el.name === this.From?.value;
    });
    this.convertedFromUnit = returnedFromValue.name;
    this.selectedCurrenyService.setCurrency(
      returnedFromValue.value * this.Amount?.value
    );
    return returnedFromValue.value;
  }

  toValue() {
    let returnedToValue = this.formattedBody.find((el: any) => {
      return el.name === this.To?.value;
    });
    this.convertedToUnit = returnedToValue.name;
    return returnedToValue.value;
  }

  convert() {
    this.convertedValue =
      (this.toValue() / this.fromValue()) * this.Amount?.value;
  }

  swapCurrencies() {
    let fromControl = this.From?.value;
    let toControl = this.To?.value;

    this.From?.setValue(toControl);
    this.To?.setValue(fromControl);
    this.convert();
  }
}
