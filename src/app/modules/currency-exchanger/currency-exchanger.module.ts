import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailesPageComponent } from './components/detailes-page/detailes-page.component';
import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { PanelComponent } from './components/panel/panel.component';
import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';



@NgModule({
  declarations: [
    HomePageComponent,
    DetailesPageComponent,
    PanelComponent,
    PopularCurrenciesComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangerRoutingModule,
    CoreModule
  ]
})
export class CurrencyExchangerModule { }
