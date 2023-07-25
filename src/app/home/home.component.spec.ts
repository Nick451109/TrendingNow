import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
  //Importe el módulo cliente para requerimientos http
  import { HttpClientModule } from '@angular/common/http';

  //Importe el servicio
  import { GetDataService } from '../providers/get-data.service';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
