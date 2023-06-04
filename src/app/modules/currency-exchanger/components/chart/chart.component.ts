import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SetDefaultService } from 'src/app/shared/services/set-default.service';

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  dataLabels: any;
  grid: any;
  stroke: any;
  title: any;
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: any;
  public chartOptions!: Partial<ChartOptions>;
  cuureny1!: any;
  cuureny2!: any;
  cuureny1Rate!: any;
  cuureny2Rate!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private setDefaultService: SetDefaultService
  ) {}
  ngOnInit(): void {
    this.setCurrencies();
    this.getDeafults();
  }

  setCurrencies() {
    this.cuureny1 = <Params>this.activatedRoute.snapshot.queryParams['chart'];
    this.cuureny2 = <any>this.activatedRoute.snapshot.fragment;
  }

  data1: any;
  getDeafults() {
    this.cuureny1Rate = Number(localStorage.getItem('currencyValue1'))?.toFixed(2);
    this.cuureny2Rate = Number(localStorage.getItem('currencyValue2'))?.toFixed(2);

    this.chartImlementation(
      this.cuureny1,
      this.cuureny2,
      this.getRndInteger(this.cuureny1Rate - 2, this.cuureny1Rate + 2),
      this.getRndInteger(this.cuureny2Rate - 2, this.cuureny2Rate + 2)
    );
  }
  getRndInteger(min: number, max: number) {
    return Array.from(
      { length: 12 },
      () => Math.floor(Math.random() * (max - min)) + min
    );
  }

  chartImlementation(c1: string, c2: string, data1: any, data2: any) {
    this.chartOptions = {
      series: [
        {
          name: c1,
          data: data1,
        },
        {
          name: c2,
          data: data2,
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Historical data for selected currencies',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    };
  }
}
