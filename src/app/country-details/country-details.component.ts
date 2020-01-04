import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  data = [
    {
      key: 'name',
      label: 'Country Name',
      value: ''
    },
    {
      key: 'capital',
      label: 'Capital',
      value: ''
    },
    {
      key: 'region',
      label: 'region',
      value: ''
    },
    {
      key: 'subregion',
      label: 'Sub region',
      value: ''
    },
    {
      key: 'population',
      label: 'population',
      value: ''
    },
    {
      key: 'area',
      label: 'area',
      value: ''
    },
    {
      key: 'alpha3Code',
      label: 'alpha3Code',
      value: ''
    }
  ];
  countryDetails: any;
  constructor(
    private _countryService: CountryDetailsService
  ) {
    this._countryService._allCountries$.subscribe(
      (countriesDetails) => {
        console.log('countriesDetails', countriesDetails);
        if (countriesDetails && countriesDetails['alpha3Code']) {
          this._countryService.getSelectedCountryDetails(countriesDetails['alpha3Code']).subscribe((countryInfo) => {
            this.countryDetails = countryInfo;
            for (const iterator in this.countryDetails) {
              this.data.map(
                (ele) => {
                  if (ele.key === iterator) {
                    ele.value = this.countryDetails[iterator];
                  }
                }
              );
            }
          });
        }
      }
    );
  }
  ngOnInit() {
  }

}
