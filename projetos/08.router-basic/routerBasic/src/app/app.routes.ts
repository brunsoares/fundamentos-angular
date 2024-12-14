import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'information',
    loadComponent: () =>
      import('./components/information/information.component').then(
        (m) => m.InformationComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./components/logout/logout.component').then(
        (m) => m.LogoutComponent
      ),
  },
];
