import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private URL: string = 'https://trendingnow-4e36f.firebaseio.com/collection.json';

//https://console.firebase.google.com/u/0/project/trendingnow-4e36f/database/trendingnow-4e36f-default-rtdb/data/~2F
//https://console.firebase.google.com/u/0/project/
  constructor(private http:HttpClient) { }
}
