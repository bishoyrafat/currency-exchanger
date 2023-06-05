import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';
import { PanelComponent } from './components/panel/panel.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavTitleComponent } from './components/nav-title/nav-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';




@NgModule({
  declarations: [
    HomePageComponent,
    PanelComponent,
    PopularCurrenciesComponent,
    ChartComponent,
    NavTitleComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangerRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,NgApexchartsModule

  ]
})
export class CurrencyExchangerModule { }
