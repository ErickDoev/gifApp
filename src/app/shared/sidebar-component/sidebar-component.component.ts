import { Component } from '@angular/core';
import { GifsService } from '../../gif/services/gifs.service';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html'
})
export class SidebarComponentComponent  {

  constructor(private gifService: GifsService) { }

  burcarTermino(termino: string){
    console.log(termino);
    this.gifService.burcarGifs(termino);
  }

 get historial(){
   return this.gifService.historial;
 }

}
