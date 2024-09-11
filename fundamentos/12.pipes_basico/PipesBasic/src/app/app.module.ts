import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonStatusPipe } from './pipes/person-status.pipe';
import { PersonTextPipe } from './pipes/person-text.pipe';
import {
  DATE_PIPE_DEFAULT_OPTIONS,
  DatePipeConfig,
  registerLocaleData,
} from '@angular/common';
import localePt from '@angular/common/locales/pt';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/yyyy',
  timezone: '+0000',
};

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  // Pipes sempre declarados no declarations
  declarations: [AppComponent, PersonStatusPipe, PersonTextPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // Configuração global para location
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    // Configuração global para format (com injection token)
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { datePipeConfig },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
