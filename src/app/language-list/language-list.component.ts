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
    // _allCountries$ is an observable which returns immidiate value that has been selected by user
    this._countryService._allCountries$.subscribe(
      (countriesDetails) => {
        // until it doesn't have any value don't proceed any search
        if (countriesDetails && countriesDetails['alpha3Code']) {
          // serached country details in the country's object which is been selected already is acheived by it's alpha3code.
          this._countryService.getSelectedCountryDetails(countriesDetails['alpha3Code']).subscribe((countryInfo) => {
            this.languageDetails = countryInfo;
            // the country uses these many languages
          });
        }
      }
    );
  }
  ngOnInit() {

  }

}
