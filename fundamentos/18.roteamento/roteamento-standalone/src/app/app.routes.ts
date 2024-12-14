import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first',
    // component: Comp01Component,
    loadComponent: () =>
      import('./components/comp-01/comp-01.component').then(
        (m) => m.Comp01Component
      ),
  },
  {
    path: 'second',
    // component: Comp02Component,
    loadComponent: () =>
      import('./components/comp-02/comp-02.component').then(
        (m) => m.Comp02Component
      ),
  },
];
