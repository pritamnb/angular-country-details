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
    loadChildren: () => import('./country-details/country-details.module').then(module => module.CountryDetailsModule)
  },
  {
    path: 'language-list',
    loadChildren: () => import('./language-list/language-list.module').then(module => module.LanguageListModule)
  },
  {
    path: 'currency-list',
    loadChildren: () => import('./currency-list/currency-list.module').then(module => module.CurrencyListModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
