import { Component, OnInit, Inject } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultCountry = 'India';
  filteredCountryNames: [];
  countryNames: any = [];
  countryList: any;

  constructor(private countryDetailService: CountryDetailsService) { }

  ngOnInit() {
    // a subscription to the Country list API which gives all country details.
    this.countryDetailService.getAllCountryDetails().subscribe(res => {
      this.countryList = res;
      // Searched INDIA in country's object
      const filtered = this.countryList.filter((country) => country.name === 'India');
      // set it up to an observable so it could be accessible to any module or a component.
      this.countryDetailService.setAllCountries(filtered[0]);

    }, err => {
      console.log(err);
    });


  }
  private _filter(value: string) {
    console.log('value', value);
    const filterValue = value.toLowerCase();

    const filteredCountryName = this.countryList.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
    return filteredCountryName.map(country => country);

  }
  onSelectCoutry(e, item) {
    // item gives an entire object(country details) of selected country
    // every mat autocomplete event gives two states of userInput to choose the right one.
    if (e.isUserInput === true) {
      // if we don't do this it will stick with the previously selected value.
      console.log('selected Coutry details', e, item);
      // user selected Value is in item
      // set it up to an observable so it could be accessible to any module or a component.

      this.countryDetailService.setAllCountries(item);

    }
  }
}
