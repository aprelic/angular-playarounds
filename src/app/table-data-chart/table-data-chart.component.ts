import { Component, OnInit } from '@angular/core';
import { GoogleChartsPieConfig } from '../google-charts-pie-config';
// import { UtilPieChartComponent } from '../util-pie-chart/util-pie-chart.component';

// declare var google: any;

@Component({
  selector: 'app-table-data-chart',
  templateUrl: './table-data-chart.component.html',
  styleUrls: ['./table-data-chart.component.css']
})
export class TableDataChartComponent implements OnInit {

  title = 'Reusable charts sample';

  data1: any[];
  config1: GoogleChartsPieConfig;
  elementId1: string;

  data2: any[];
  config2: GoogleChartsPieConfig;
  elementId2: string;

  ngOnInit() {

    // Piechart1 Data & Config
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat',      3],
    ['Commute',  2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep',    10]];

    this.config1 = new GoogleChartsPieConfig('My Daily Activities at 20 years old', 0.4);
    this.elementId1 = 'myPieChart1';

    // Piechart2 Data & Config
    this.data2 = [['Task', 'Hours per Day'],
                  ['Work',     11],
                  ['Eat',      2],
                  ['Commute',  2],
                  ['Watch TV', 2],
                  ['Sleep',    7]];

    this.config2 = new GoogleChartsPieConfig('My Daily Activities at 30 years old', 0.4);
    this.elementId2 = 'myPieChart2';
  }

}
