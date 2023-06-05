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
  @ViewChild('chart') chart!: HTMLElement;
  public chartOptions!: Partial<ChartOptions>;
  cuureny1!: string;
  cuureny2!: string;
  cuureny1Rate!: number;
  cuureny2Rate!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private setDefaultService: SetDefaultService
  ) {}
  ngOnInit(): void {
    this.setCurrencies();
    this.getDefaults();
  }

  setCurrencies() {
    this.cuureny1 = <string>this.activatedRoute.snapshot.queryParams['chart'];
    this.cuureny2 = <string>this.activatedRoute.snapshot.fragment;
        // window.location.reload()

  }

  getDefaults() {
    this.cuureny1Rate = Number(localStorage.getItem('currencyValue1'));
    this.cuureny2Rate = Number(localStorage.getItem('currencyValue2'));

    this.chartImlementation(
      this.cuureny1,
      this.cuureny2,
      this.getRndInteger(+this.cuureny1Rate - 2, +this.cuureny1Rate + 2),
      this.getRndInteger(+this.cuureny2Rate - 2, +this.cuureny2Rate + 2)
    );
  }

  getRndInteger(min: number, max: number) {
    return Array.from(
      { length: 12 },
      () =>
        Math.floor(Math.random() * (+max.toFixed(2) - +min.toFixed(2))) +
        min.toFixed(2)
    );
  }

  chartImlementation(c1: string, c2: string, data1: string[], data2: string[]) {
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
          colors: ['#f3f3f3', 'transparent'],
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
