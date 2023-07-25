import { TestBed } from '@angular/core/testing';

import { GetDataService } from './get-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Video } from '../interfaces/video';

describe('GetDataService', () => {
  let service: GetDataService;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GetDataService]
    });
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getResponse() should return value from observable', (done:DoneFn) => {
    service.getResponse().subscribe((data:any)=>{
      expect((data as Video[]).length).toBeGreaterThan(0)
      done();
    });
  });
});
