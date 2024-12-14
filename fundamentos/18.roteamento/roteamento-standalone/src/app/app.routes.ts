import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'second',
  },
  {
    path: 'first',
    title: 'Primeiro Componente',
    loadChildren: () =>
      import('./components/comp-01/first.routes').then((m) => m.FirstRoutes),
  },
  {
    path: 'second',
    title: 'Segundo Componente',
    // component: Comp02Component,
    loadComponent: () =>
      import('./components/comp-02/comp-02.component').then(
        (m) => m.Comp02Component
      ),
  },
  {
    path: '**',
    title: 'Página não encontrada',
    component: NotFoundComponent,
  },
];
