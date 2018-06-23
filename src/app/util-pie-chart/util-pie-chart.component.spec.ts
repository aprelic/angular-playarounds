import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilPieChartComponent } from './util-pie-chart.component';

describe('UtilPieChartComponent', () => {
  let component: UtilPieChartComponent;
  let fixture: ComponentFixture<UtilPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
