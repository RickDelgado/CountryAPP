import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-language-page',
  templateUrl: './by-language-page.component.html',
  styles: [
  ]
})
export class ByLanguageComponent  {

  placeholder:string = 'Buscar por Lenguaje';
  public countries:Country[] = [];
    
  constructor(private countriesService:CountriesService) { }
  
  searchByLanguage(term:string){
    this.countriesService.searchLanguage(term).subscribe(
      countries =>{
        this.countries = countries;
      })
  }
}
