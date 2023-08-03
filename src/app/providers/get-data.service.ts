import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private URL: string = 'https://trendingnow-4e36f-default-rtdb.firebaseio.com/collection.json';
  private data: any;
  constructor(private http:HttpClient) { }

  getResponse(){
    
    if (this.data) {
      return this.data;
    } else {
      this.data = this.http.get(this.URL)
      return this.data;
    }
  }
  


}
