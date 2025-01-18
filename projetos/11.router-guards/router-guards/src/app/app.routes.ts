import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CreditComponent } from './components/credit/credit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DebitComponent } from './components/debit/debit.component';
import { GeneralComponent } from './components/general/general.component';
import { LoginComponent } from './components/login/login.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { authWithScopesGuard } from './guards/auth-with-scopes.guard';
import { scopesGuard } from './guards/scopes.guard';
import { authGuard } from './guards/auth.guard';
import { walletGuard } from './guards/wallet.guard';
import { ContactsComponent } from './components/contacts/contacts.component';
import { generalInfoResolver } from './resolvers/general-info.resolver';
import { logoutGuard } from './guards/logout.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authWithScopesGuard('dashboard')],
    canActivateChild: [authGuard()],
    canDeactivate: [logoutGuard()],
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full',
      },
      {
        path: 'general',
        component: GeneralComponent,
        resolve: {
          generalInfo: generalInfoResolver,
        },
      },
      {
        path: 'payment',
        canActivate: [scopesGuard('pagamentos')],
        component: PaymentsComponent,
        children: [
          {
            path: '',
            canActivateChild: [walletGuard()],
            children: [
              {
                path: 'debit',
                component: DebitComponent,
              },
              {
                path: 'credit',
                component: CreditComponent,
              },
            ],
          },
          {
            path: 'contacts',
            component: ContactsComponent,
          },
        ],
      },
      {
        path: 'admin',
        canActivate: [scopesGuard('admin')],
        component: AdminComponent,
      },
    ],
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent,
    data: { type: 'not-authorized' },
  },
  {
    path: 'not-found',
    component: NotAuthorizedComponent,
    data: { type: 'not-found' },
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
