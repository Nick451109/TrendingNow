import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private URL: string = 'https://datasetbd-default-rtdb.firebaseio.com/collection.json';
  private data: any;
  constructor(private http:HttpClient) { }

  getResponse(){
    return this.http.get(this.URL);
  }
  saveData(data:any){
    this.data = data;
  }


}
