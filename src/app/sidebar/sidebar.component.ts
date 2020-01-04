import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDetailsService } from '../services/country-details.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  p: any;
  contents: any;
  constructor(
    private router: Router,
    private _countryService: CountryDetailsService
  ) {
    this.contents = [
      {
        name: 'Home',
        path: 'country-details'
      },
      {
        name: 'Language List',
        path: 'language-list'
      },
      {
        name: 'Currency list',
        path: 'currency-list'
      }
    ];
  }

  ngOnInit() {
  }

  onSelected(ch, name, path) {
    this.p = path;
    console.log(this.p);
    this.router.navigate([`${this.p}`]);
  }
}
