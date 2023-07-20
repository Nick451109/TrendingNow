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
    })
  }
}
