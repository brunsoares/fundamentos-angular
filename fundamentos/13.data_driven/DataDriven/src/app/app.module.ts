import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InvalidTextValidatorDirective } from './directives/invalid-text-validator.directive';
import { DepartQuantityValidatorDirective } from './directives/depart-quantity-validator.directive';

@NgModule({
  declarations: [AppComponent, InvalidTextValidatorDirective, DepartQuantityValidatorDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
