import { TestBed, inject } from '@angular/core/testing';

import { SuppliersGridService } from './suppliers-grid.service';

describe('SuppliersGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppliersGridService]
    });
  });

  it('should ...', inject([SuppliersGridService], (service: SuppliersGridService) => {
    expect(service).toBeTruthy();
  }));
});
