import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
       width:35px;
    }`  ]
})
export class CountryTableComponent implements OnInit {

@Input() 
public countries: Country[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
