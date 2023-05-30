import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailesPageComponent } from './components/detailes-page/detailes-page.component';
import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    DetailesPageComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangerRoutingModule,
    CoreModule
  ]
})
export class CurrencyExchangerModule { }
