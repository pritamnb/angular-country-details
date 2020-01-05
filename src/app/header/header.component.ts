import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountryDetailsService } from '../services/country-details.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl();
  filteredCountryNames: [];
  countryNames: any = [];
  countryList: any;

  constructor(private countryDetailService: CountryDetailsService) {
    // this subscription will give exact value that user enteres in the mat autocomplete's inpute field.
    this.myControl.valueChanges.subscribe(
      (res) => {
        // console.log(res);
      }
    );

  }

  ngOnInit() {
    // a subscription to the Country list API which gives all country details.
    this.countryDetailService.getAllCountryDetails().subscribe(res => {
      this.countryList = res;
      // setting up a default value.
      this.myControl.setValue('India');
      // Searched INDIA in country's object
      const filtered = this.countryList.filter((country) => country.name === 'India');
      // set it up to an observable so it could be accessible to any module or a component.
      this.countryDetailService.setAllCountries(filtered[0]);

    }, err => {
      console.log(err);
    });


  }
  onSelectCoutry(e, item) {
    // item.value gives an entire object(country details) of selected country
    // every mat autocomplete event gives two states of userInput to choose the right one.
    if (e.isUserInput === true) {
      // if we don't do this it will stick with the previously selected value.
      console.log('selected Coutry details', e);
      // user selected Value is in item.value
      // set it up to an observable so it could be accessible to any module or a component.
      this.myControl.valueChanges.subscribe(
        (res) => {
          if (res.length > 0) {
            this.countryDetailService.setAllCountries(item.value);
          } else {
          }
        });
    }
  }
}
