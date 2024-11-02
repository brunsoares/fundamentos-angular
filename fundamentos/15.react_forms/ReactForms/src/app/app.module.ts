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
import { FormGroupComponent } from './exemplos/form-group/form-group.component';
import { FormArrayComponent } from './exemplos/form-array/form-array.component';
import { FormArrayGroupComponent } from './exemplos/form-array-group/form-array-group.component';
import { FormBuilderComponent } from './exemplos/form-builder/form-builder.component';

@NgModule({
  declarations: [AppComponent, Ex001Component, ValidatorAsyncComponent, FormGroupComponent, FormArrayComponent, FormArrayGroupComponent, FormBuilderComponent],
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
