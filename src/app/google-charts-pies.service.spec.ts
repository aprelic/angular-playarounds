import { TestBed, inject } from '@angular/core/testing';

import { GoogleChartsPiesService } from './google-charts-pies.service';

describe('GoogleChartsPiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleChartsPiesService]
    });
  });

  it('should be created', inject([GoogleChartsPiesService], (service: GoogleChartsPiesService) => {
    expect(service).toBeTruthy();
  }));
});
