import { Component } from '@angular/core';
import { GetDataService } from '../providers/get-data.service';
import { Video } from '../interfaces/video';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public data: Video[] = [];
  constructor(private dataProvider: GetDataService){}
  
  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response:any) => {
      this.data = (response as Video[]);
    })
  }
}
