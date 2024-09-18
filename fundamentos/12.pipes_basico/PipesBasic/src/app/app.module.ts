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
import { CompObjetoComponent } from './component/comp-objeto/comp-objeto.component';
import { HttpClientModule } from '@angular/common/http';
import { CompArrayComponent } from './component/comp-array/comp-array.component';
import { CompPromiseComponent } from './component/comp-promise/comp-promise.component';
import { PipePuroImpuroComponent } from './component/pipe-puro-impuro/pipe-puro-impuro.component';
import { StatusPipe } from './pipes/status.pipe';
import { ImgStatusPipe } from './pipes/img-status.pipe';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/yyyy',
  timezone: '+0000',
};

registerLocaleData(localePt, 'pt-BR');
registerLocaleData(localePt, 'ja-JP');

@NgModule({
  // Pipes sempre declarados no declarations
  declarations: [
    AppComponent,
    PersonStatusPipe,
    PersonTextPipe,
    StatusPipe,
    ImgStatusPipe,
    CompObjetoComponent,
    CompArrayComponent,
    CompPromiseComponent,
    PipePuroImpuroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // Configuração global para location
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: LOCALE_ID,
      useValue: 'ja-JP',
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
