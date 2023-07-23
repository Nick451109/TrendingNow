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
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Video[]);
      
      
      //---------------------------------------------------------
      //10 videos mas trending por numero de vistas
      const data:any[]=this.data;

      data.sort((a, b) => b.view_count - a.view_count);

      const topVideos:any[] = [];
      const videoIdsAdded: Set<string> = new Set();

      data.forEach((video) => {
        if (!videoIdsAdded.has(video.video_id)) {
          topVideos.push(video);
          videoIdsAdded.add(video.video_id);
      
          // Detener el bucle cuando se hayan agregado 10 videos
          if (topVideos.length === 10) {
            return;
          }
        }
      });

      const top10Videos = topVideos.slice(0, 10);

      top10Videos.forEach((element:Video) => {
        let fechaTrending = new Date(element.trending_date)
        let fechaPublicacion = new Date (element.publishedAt)
        
        // Restamos las dos fechas para obtener la diferencia en milisegundos
        let diferenciaTiempoMs:number = fechaTrending.getTime() - fechaPublicacion.getTime();
  
        // Convertimos la diferencia a días, dividiendo por el número de milisegundos en un día (1000 ms * 60 s * 60 min * 24 h)
        let diferenciaTiempoDias:number = Math.floor(diferenciaTiempoMs / (1000 * 60 * 60 * 24));
  
        element.trending_time = diferenciaTiempoDias
      });
      this.data = top10Videos;
    })
  }

}
