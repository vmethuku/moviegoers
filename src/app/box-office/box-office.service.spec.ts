import { TestBed, inject } from '@angular/core/testing';

import { BoxOfficeService } from './box-office.service';

describe('BoxOfficeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoxOfficeService]
    });
  });

  it('should be created', inject([BoxOfficeService], (service: BoxOfficeService) => {
    expect(service).toBeTruthy();
  }));
});
