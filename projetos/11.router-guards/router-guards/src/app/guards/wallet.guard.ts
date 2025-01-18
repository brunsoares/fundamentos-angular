import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const walletGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthService);

    return authService.getUserWalletStatus() === 'active';
  };
};
