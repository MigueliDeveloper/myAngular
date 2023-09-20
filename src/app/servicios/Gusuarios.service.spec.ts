/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GusuariosService } from './Gusuarios.service';

describe('Service: Gusuarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GusuariosService]
    });
  });

  it('should ...', inject([GusuariosService], (service: GusuariosService) => {
    expect(service).toBeTruthy();
  }));
});
