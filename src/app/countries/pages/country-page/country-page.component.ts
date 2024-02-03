import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country; //! para que no de error al no inicializar la variable

  constructor(private activatedRoute:ActivatedRoute, private countryService: CountriesService,
    private router:Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByaplhaCode( id ) )
    ).subscribe(country =>{
      
      if(!country) return this.router.navigateByUrl('');
     
      this.country = country;
      
      return;
    })
  }

}
