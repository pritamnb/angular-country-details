import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../app.contant';
import { BehaviorSubject } from 'rxjs';
import { sprintf } from 'sprintf-js';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  private allCounteriesDataSource = new BehaviorSubject({});
  _allCountries$ = this.allCounteriesDataSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllCountryDetails() {
    return this.http.get(ApiEndPoints.COUNTRY.ALL_DETAILS);
  }

  getSelectedCountryDetails(alpha3Code) {
    return this.http.get(sprintf(ApiEndPoints.COUNTRY.CURRENCY_LIST, alpha3Code));

  }

  setAllCountries(data) {
    this.allCounteriesDataSource.next(data);
  }
}
