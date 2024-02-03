import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl = 'https://restcountries.com/v3.1/';



    constructor(private http: HttpClient) { }

    searchCapital(term: string):Observable<Country[]> {
        const url = `${ this.apiUrl }/capital/${term}`;
        return this.http.get<Country[]>(url).pipe(
            catchError( error => {
                console.log('error en el servicio', error);
                return of([]);
            })
        );
    }

    searchCountry(term: string):Observable<Country[]> {
        const url = `${ this.apiUrl }/name/${term}`;
        return this.http.get<Country[]>(url).pipe(
            map(countries => countries.sort((a,b) => a.population -b.population),
            catchError( error => {
                console.log('error en el servicio', error);
                return of([]);
            })
        ));
    }

    searchRegion(term: string):Observable<Country[]> {
        const url = `${ this.apiUrl }/region/${term}`;
        return this.http.get<Country[]>(url).pipe(
            catchError( error => {
                console.log('error en el servicio', error);
                return of([]);
            })
        );
    }

    searchLanguage(term: string):Observable<Country[]> {
        const url = `${ this.apiUrl }/lang/${term}`;
        
        return this.http.get<Country[]>(url).pipe(
            map(countries => countries.sort((a,b) => b.population -a.population ),
            catchError( error => {
                console.log('error en el servicio', error);
                return of([]);
            })
        ));
    }





    
}