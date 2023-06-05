import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularCurrenciesService } from 'src/app/shared/services/popular-currencies.service';
import { SelectedCurrenyService } from 'src/app/shared/services/selected-curreny.service';
import { CurrencyExchangerService } from '../../services/currency-exchanger.service';

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.scss'],
})
export class PopularCurrenciesComponent implements OnInit {
  favouriteCurreencies: { name: string; value: number }[] = [];
  mappedArray: { name: string; value: number }[] = [];
  isSubscriped$!: Observable<any>;
  constructor(
    private popularCurrenciesService: PopularCurrenciesService,
    private selectedCurrenyService: SelectedCurrenyService
  ) {}

  ngOnInit(): void {
    this.filterData()
    this.mapDataToFinalView()
  }

  filterData() {
    this.mappedArray=[]

    this.popularCurrenciesService
      .getCurrency()
      .subscribe((data: any) => {
        this.favouriteCurreencies = data.filter((el: {name:string,value:number}) => {
          return (
            el.name == 'USD' ||
            el.name == 'EUR' ||
            el.name == 'EGP' ||
            el.name == 'AUD' ||
            el.name == 'SAR' ||
            el.name == 'CAD' ||
            el.name == 'BHD' ||
            el.name == 'AED' ||
            el.name == 'KWD'
          );
        });
      });

  }

  mapDataToFinalView() {
    this.selectedCurrenyService.getCurrency().subscribe((i: any) => {
      this.isSubscriped$=i
      this.mappedArray = this.favouriteCurreencies.map((el: {name:string,value:number}) => {
        return { name: el.name, value: el.value * i };
      }).slice(0, 9);
    });
  }
}
