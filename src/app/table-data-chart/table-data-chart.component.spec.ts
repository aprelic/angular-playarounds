import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataChartComponent } from './table-data-chart.component';

describe('TableDataChartComponent', () => {
  let component: TableDataChartComponent;
  let fixture: ComponentFixture<TableDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
