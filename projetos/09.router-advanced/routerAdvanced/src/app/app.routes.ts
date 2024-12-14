import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'general',
    loadChildren: () =>
      import('./components/general/general.routes').then(
        (m) => m.GeneralRoutes
      ),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./components/transaction/transaction.routes').then(
        (m) => m.TransactionRoutes
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
