import { PopularCurrenciesComponent } from './components/popular-currencies/popular-currencies.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    children:[
      {
        path:'',
        component:PopularCurrenciesComponent
      },
      {
        path:'detailes',
        component:ChartComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangerRoutingModule { }
