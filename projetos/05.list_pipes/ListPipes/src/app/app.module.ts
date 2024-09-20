import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { StatusOperationPipe } from 'src/pipes/status-operation.pipe';
import { IconStatusOperationPipe } from 'src/pipes/icon-status-operation.pipe';
import { DatePipeConfig, registerLocaleData } from '@angular/common';
import { FilterUserOperationPipe } from 'src/pipes/filter-user-operation.pipe';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/yyyy',
  timezone: '+0000',
};

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    StatusOperationPipe,
    IconStatusOperationPipe,
    FilterUserOperationPipe,
  ],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: datePipeConfig,
      useValue: { datePipeConfig },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
