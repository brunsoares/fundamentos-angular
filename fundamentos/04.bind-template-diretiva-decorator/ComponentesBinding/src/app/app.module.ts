import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanCardsComponent } from './plan-cards/plan-cards.component';
import { BindComponent } from './bind/bind.component';
import { PlanCardsModule } from './plan-cards/plan-cards.module';

@NgModule({
  declarations: [AppComponent, PlanCardsComponent, BindComponent],
  imports: [BrowserModule, AppRoutingModule, PlanCardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
