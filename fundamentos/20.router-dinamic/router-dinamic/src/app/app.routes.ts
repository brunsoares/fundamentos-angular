import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { ContactComponent } from './components/contact/contact.component';
import { InformationComponent } from './components/information/information.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreditComponent } from './components/cards/components/credit/credit.component';
import { DebitComponent } from './components/cards/components/debit/debit.component';
import { CardComponent } from './components/cards/components/card/card.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'initial',
    pathMatch: 'full',
  },
  {
    path: 'initial',
    component: InitialComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'information',
    component: InformationComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
    children: [
      {
        path: '',
        redirectTo: 'debit',
        pathMatch: 'full',
      },
      {
        path: 'credit',
        component: CreditComponent,
      },
      {
        path: 'debit',
        component: DebitComponent,
      },
      {
        path: ':id',
        component: CardComponent,
      },
    ],
  },
];
