import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
// Import the authentication guard

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'restaurants-list',
      },
      {
        path: 'restaurants-list',
        loadChildren: () =>
          import('./restaurants-list/restaurants-list.module').then(
            (m) => m.RestaurantsListModule
          ),
      },
      {
        path: 'restaurant/:name',
        loadChildren: () =>
          import('./restaurant/restaurant.module').then(
            (m) => m.RestaurantsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
