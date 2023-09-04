/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MongoserviceService } from './mongoservice.service';

describe('Service: Mongoservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoserviceService]
    });
  });

  it('should ...', inject([MongoserviceService], (service: MongoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
