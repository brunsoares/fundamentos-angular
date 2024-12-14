import { Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { GeneralBasicComponent } from './general-basic/general-basic.component';
import { GeneralContactComponent } from './general-contact/general-contact.component';
import { GeneralAddressComponent } from './general-address/general-address.component';

export const GeneralRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic',
  },
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'basic',
        component: GeneralBasicComponent,
      },
      {
        path: 'contact',
        component: GeneralContactComponent,
      },
      {
        path: 'address',
        component: GeneralAddressComponent,
      },
    ],
  },
];
