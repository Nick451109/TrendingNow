import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { GetDataService } from '../providers/get-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GetDataService],
      declarations: [ChartComponent],
      
    });
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request service user after Angular calls ngOnInit',(done:DoneFn) => {
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      expect(component.data.length).toBeGreaterThan(0);
      done();
    });
  });
});
