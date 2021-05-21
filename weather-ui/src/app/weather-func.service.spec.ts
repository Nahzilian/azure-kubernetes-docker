import { TestBed } from '@angular/core/testing';

import { WeatherFuncService } from './weather-func.service';

describe('WeatherFuncService', () => {
  let service: WeatherFuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
