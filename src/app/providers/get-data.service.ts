import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private URL: string = 'https://datasetbd-default-rtdb.firebaseio.com/collection.json';
  private data: any;
  private dataRequested: boolean = false;
  constructor(private http:HttpClient) { }

  getResponse(){
    
    if (this.data) {
      // Si ya tenemos los datos en caché, devolvemos los mismos datos
      console.log('ya esta en cache')
      return this.data;
    } else if (this.dataRequested) {
      console.log('ya se esta haciendo la peticion')
      // Si la petición ya se está realizando en otro componente, esperamos a que se complete
      return this.data;
    } else {
      console.log('Se hizo la peticion')
      this.dataRequested = true;
      this.data = this.http.get(this.URL)
      // Si no, realizamos la petición y almacenamos los datos en caché
      return this.data;
    }
  }
  


}
