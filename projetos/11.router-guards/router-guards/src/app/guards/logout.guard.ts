import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const logoutGuard = (): CanDeactivateFn<DashboardComponent> => {
  return (
    component: DashboardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> => {
    if (nextState.url === '/login') {
      const confirmation = confirm('Deseja realmente sair?');
      if (confirmation) {
        localStorage.removeItem('access-token');
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
};
