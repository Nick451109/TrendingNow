import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private URL: string = 'https://<NOMBRE_DEL_PROYECTO>.firebaseio.com/collection.json';


  constructor(private http:HttpClient) { }
}
