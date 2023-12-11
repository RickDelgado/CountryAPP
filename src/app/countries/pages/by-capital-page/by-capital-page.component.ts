import { Component } from '@angular/core';

@Component({
  selector: 'page-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

placeholder:string = 'Buscar por Capital';
  
  searchByCapital(term:string){
    console.log('Desde byCapitalPage');
    console.log(term);
  }
  



}
