import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
} from '@angular/router';
import { catchError, map } from 'rxjs';

export const authWithScopesGuard = (scope: string): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.verifyToken().pipe(
      catchError(() => {
        return router.navigate(['/login']);
      }),
      map(() => {
        if (authService.getUserScopes().includes(scope)) {
          return true;
        } else {
          router.navigate(['/not-authorized']);
          return false;
        }
      })
    );
  };
};
