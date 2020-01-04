import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../app.contant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  private allCounteriesDataSource = new BehaviorSubject({});
  _allCountries$ = this.allCounteriesDataSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllCountryDetails() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getSelectedCountryDetails(alpha3Code) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
  }

  setAllCountries(data) {
    this.allCounteriesDataSource.next(data);
  }
}
