import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Data } from '../data';
import { MOCKDATA } from '../mock-data';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  displayedColumns = ['position', 'id', 'name', 'ecl', 'stage'];
  footerColumns = ['ecl'];
  dataSource = new MatTableDataSource<Data>(MOCKDATA);
  // dataSource: Data[] = MOCKDATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getTotalEcl() {
    // return this.dataSource.map(t => t.ecl).reduce((acc, value) => acc + value, 0);
    return 0;
  }

}
