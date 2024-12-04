import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp01Module } from './components/comp-01/comp-01.module';
import { Comp02Module } from './components/comp-02/comp-02.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Comp01Module, Comp02Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
