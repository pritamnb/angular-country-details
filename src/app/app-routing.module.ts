import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/country-details',
    pathMatch: 'full'
  },
  {
    path: 'country-details',
    pathMatch: 'full',
    // lazy loading angular 8 syntax
    loadChildren: () => import('./country-details/country-details.module').then(module => module.CountryDetailsModule)
  },
  {
    path: 'language-list',
    // lazy loading angular 8 syntax
    loadChildren: () => import('./language-list/language-list.module').then(module => module.LanguageListModule)
  },
  {
    path: 'currency-list',
    // lazy loading angular 8 syntax
    loadChildren: () => import('./currency-list/currency-list.module').then(module => module.CurrencyListModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
