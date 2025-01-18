import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GeneralInfoService } from '../service/general-info.service';
import { firstValueFrom } from 'rxjs';

export const generalInfoResolver: ResolveFn<any> = () => {
  const generalInfoService = inject(GeneralInfoService);
  return Promise.all([
    firstValueFrom(generalInfoService.getIncidentsDay()),
    firstValueFrom(generalInfoService.getPendentPayment()),
    firstValueFrom(generalInfoService.getAccountsCreate()),
    firstValueFrom(generalInfoService.getActiveUsers()),
  ]).then(([incidents, pendentPayments, accountsCreate, activeUsers]) => {
    return {
      incidents,
      pendentPayments,
      accountsCreate,
      activeUsers,
    };
  });
};
