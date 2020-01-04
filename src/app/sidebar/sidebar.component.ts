import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  p: any;
  contents: any;
  constructor(private router: Router) {
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
