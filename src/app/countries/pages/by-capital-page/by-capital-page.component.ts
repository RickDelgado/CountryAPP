import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'page-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

placeholder:string = 'Buscar por Capital';
public countries:Country[] = [];
  
constructor(private countriesService:CountriesService) { }

searchByCapital(term:string){
  this.countriesService.searchCapital(term).subscribe(
    countries =>{
      this.countries = countries;
    })
}

}
