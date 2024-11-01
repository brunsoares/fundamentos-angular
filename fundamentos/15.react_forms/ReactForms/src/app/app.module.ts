import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex001Component } from './exemplos/ex001/ex001.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorAsyncComponent } from './exemplos/validator-async/validator-async.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Ex001Component, ValidatorAsyncComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
