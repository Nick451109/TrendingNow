import { Component } from '@angular/core';
import { Video } from '../interfaces/video';
import { GetDataService } from '../providers/get-data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public data: Video[] = [];

  constructor(private dataProvider: GetDataService){}
  
  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response:any) => {
      this.data = (response as Video[]);
      
      this.data.forEach((element:Video) => {
        let fechaTrending = new Date(element.trending_date)
        let fechaPublicacion = new Date (element.publishedAt)
        
        // Restamos las dos fechas para obtener la diferencia en milisegundos
        let diferenciaTiempoMs:number = fechaTrending.getTime() - fechaPublicacion.getTime();
  
        // Convertimos la diferencia a días, dividiendo por el número de milisegundos en un día (1000 ms * 60 s * 60 min * 24 h)
        let diferenciaTiempoDias:number = Math.floor(diferenciaTiempoMs / (1000 * 60 * 60 * 24));
  
        element.trending_time = diferenciaTiempoDias
      });
      
    })
  }

}