//import { Injectable } from '@angular/core';

declare var google: any;

//@Injectable({
//  providedIn: 'root'
//})
export class GoogleChartsService {

  constructor() {
    google.charts.load('current', {'packages': ['corechart']});
  }

  // protected?
  protected buildChart(data: any[], chartFunc: any, options: any): void {
    // let func = (chartFunc, options) => {
    //   let datatable = google.visualization.arrayToDataTable(data);
    //   chartFunc().draw(datatable, options);
    // };
    // let callback = () => func(chartFunc, options);

    // let callback = () => {
    // // let datatable = google.visualization.arrayToDataTable(data);
    //  chartFunc().draw(google.visualization.arrayToDataTable(data), options);
    // };

    // google.charts.setOnLoadCallback(
    //  chartFunc().draw(google.visualization.arrayToDataTable(data), options));
    // return;

    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };   
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
}
