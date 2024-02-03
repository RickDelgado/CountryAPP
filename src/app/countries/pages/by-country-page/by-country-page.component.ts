import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent  {

  placeholder:string = 'Buscar por País';
  public countries:Country[] = [];
    
  constructor(private countriesService:CountriesService) { }
  
  searchByCountry(term:string){
    this.countriesService.searchCountry(term).subscribe(
      countries =>{
        this.countries = countries;
      })
  }
}
