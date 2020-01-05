import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})

export class CurrencyListComponent implements OnInit {

  CurrencyDetails: any;

  constructor(private _countryService: CountryDetailsService) {
    // _allCountries$ is an observable which returns immidiate value that has been selected by user
    this._countryService._allCountries$.subscribe(
      (countriesDetails) => {
        // until it doesn't have any value don't proceed any search
        if (countriesDetails && countriesDetails['alpha3Code']) {
          this._countryService.getSelectedCountryDetails(countriesDetails['alpha3Code']).subscribe((countryInfo) => {
            this.CurrencyDetails = countryInfo;
            // the country uses these currencies
          });
        }
      }
    );
  }

  ngOnInit() {

  }
}
