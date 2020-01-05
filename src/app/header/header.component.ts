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
    this.myControl.valueChanges.subscribe(
      (res) => {
        // console.log(res);
      }
    );

  }

  ngOnInit() {
    this.countryDetailService.getAllCountryDetails().subscribe(res => {
      this.countryList = res;
      this.myControl.setValue('India');
      const filtered = this.countryList.filter((country) => country.name === 'India');
      this.countryDetailService.setAllCountries(filtered[0]);

    }, err => {
      console.log(err);
    });


  }
  onSelectCoutry(item) {
    this.countryDetailService.setAllCountries(item.value);
    console.log('selected Coutry details', item);
  }
}
