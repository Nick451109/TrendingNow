import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery.component';
import { GetDataService } from '../providers/get-data.service';

//---------------------------------------------------------
describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GetDataService],
      declarations: [GalleryComponent]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();


    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {


      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)

      // Que espere hasta que llegue la respuesta
      done();
    });
  });
  // it('nav element', () => {
  //   const headerElement: HTMLElement = fixture.nativeElement;
  //   const nav = headerElement.querySelector('nav')!;
  //   expect(nav).toBeTruthy();
  // })

  //Valide la NO existencia de un elemento <p> en la plantilla html del elemento

  it('No p element', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const p = headerElement.querySelector('p')!;
    expect(p).toBeFalsy();
  })


  it('section element', () => {
    const galleryContainer: HTMLElement = fixture.nativeElement;
    const p = galleryContainer.querySelector('section')!;
    expect(p.id).toEqual("gallery");
  });
});
//---------------------------------------------------------

