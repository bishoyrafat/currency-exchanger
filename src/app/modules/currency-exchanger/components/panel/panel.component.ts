import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Icurruncies } from 'src/app/shared/models/currencies';
import { PopularCurrenciesService } from 'src/app/shared/services/popular-currencies.service';
import { SelectedCurrenyService } from 'src/app/shared/services/selected-curreny.service';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  disabled: boolean = true;
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
    private currencyExchangerService: CurrencyExchangerService,
    private popularCurrenciesService: PopularCurrenciesService,
    private selectedCurrenyService: SelectedCurrenyService,
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
      val ? (this.disabled = false) : (this.disabled = true);
    });
  }

  navigateToDetailes() {
    this.router.navigate(['/detailes']);
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
    this.selectedCurrenyService.setCurrency( returnedFromValue.value * this.Amount?.value)

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
