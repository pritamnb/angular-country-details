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

    this._countryService._allCountries$.subscribe(
      (countriesDetails) => {
        console.log('countriesDetails', countriesDetails);
        if (countriesDetails && countriesDetails['alpha3Code']) {
          this._countryService.getSelectedCountryDetails(countriesDetails['alpha3Code']).subscribe((countryInfo) => {
            this.CurrencyDetails = countryInfo;
            console.log('this.CurrencyDetails', this.CurrencyDetails);
          });
        }
      }
    );
  }

  ngOnInit() {

  }
}
