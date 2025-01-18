import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { GuardResult, MaybeAsync, Router } from '@angular/router';

export const scopesGuard = (scope: string) => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.getUserScopes().includes(scope)) {
      return true;
    } else {
      return router.navigate(['/not-authorized']);
    }
  };
};
