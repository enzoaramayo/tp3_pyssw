import { TestBed } from '@angular/core/testing';

import { MisPalabrasService } from './mis-palabras.service';

describe('MisPalabrasService', () => {
  let service: MisPalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisPalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
