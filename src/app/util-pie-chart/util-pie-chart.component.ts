import { Component, Input, OnInit } from '@angular/core';
import { GoogleChartsPieConfig } from '../google-charts-pie-config';
import { GoogleChartsPiesService } from '../google-charts-pies.service';

declare var google: any;

@Component({
  selector: 'app-util-pie-chart',
  templateUrl: './util-pie-chart.component.html',
  styleUrls: ['./util-pie-chart.component.css']
})
export class UtilPieChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: GoogleChartsPieConfig;
  @Input() elementId: string;

  constructor(private _pieChartService: GoogleChartsPiesService) {}

  ngOnInit(): void {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
  }
}
