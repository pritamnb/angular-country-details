import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  languageDetails: any;

  constructor(private _countryService: CountryDetailsService) {
    this._countryService._allCountries$.subscribe(
      (countriesDetails) => {
        console.log('countriesDetails', countriesDetails);
        if (countriesDetails && countriesDetails['alpha3Code']) {
          this._countryService.getSelectedCountryDetails(countriesDetails['alpha3Code']).subscribe((countryInfo) => {
            this.languageDetails = countryInfo;
            console.log('this.languageDetails', this.languageDetails);
          });
        }
      }
    );
  }
  ngOnInit() {

  }

}
