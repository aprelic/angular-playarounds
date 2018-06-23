import { Injectable } from '@angular/core';
import { GoogleChartsService } from './google-charts.service';
import { GoogleChartsPieConfig } from './google-charts-pie-config';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleChartsPiesService extends GoogleChartsService {

  constructor() { super(); }

  public BuildPieChart(elementId: string, data: any[], config: GoogleChartsPieConfig) {
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(<string>elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
            is3D: true,
      };

    this.buildChart(data, chartFunc, options);
  }
}
