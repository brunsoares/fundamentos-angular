import { Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { TransactionCreditComponent } from './transaction-credit/transaction-credit.component';
import { TransactionDebitComponent } from './transaction-debit/transaction-debit.component';

export const TransactionRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'credit',
  },
  {
    path: '',
    component: TransactionComponent,
    children: [
      {
        path: 'credit',
        component: TransactionCreditComponent,
      },
      {
        path: 'debit',
        component: TransactionDebitComponent,
      },
    ],
  },
];
