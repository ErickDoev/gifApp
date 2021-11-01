import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'FQ8JsFPPo0PskcEDjDqDDf31qVBdtNiB';
  private _historial:string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

  }

  burcarGifs(query:string = ''){
    query = query.trim().toLowerCase(); 
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
    })

      
  }

}