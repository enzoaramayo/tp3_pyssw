import { TestBed } from '@angular/core/testing';

import { PasajeServiceService } from './pasaje-service.service';

describe('PasajeServiceService', () => {
  let service: PasajeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasajeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
