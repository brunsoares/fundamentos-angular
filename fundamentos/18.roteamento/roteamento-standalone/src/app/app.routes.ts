import { Routes } from '@angular/router';
import { Comp01Component } from './components/comp-01/comp-01.component';
import { Comp02Component } from './components/comp-02/comp-02.component';

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
