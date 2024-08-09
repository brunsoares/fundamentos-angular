import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanCardsComponent } from './plan-cards/plan-cards.component';
import { BindComponent } from './bind/bind.component';
import { PlanCardsModule } from './plan-cards/plan-cards.module';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { EstruturaNgForComponent } from './estrutura-ng-for/estrutura-ng-for.component';
import { AttrNgStyleComponent } from './attr-ng-style/attr-ng-style.component';
import { AttrNgClassComponent } from './attr-ng-class/attr-ng-class.component';
import { PipesComponent } from './pipes/pipes.component';
import { EstruturaNgIfComponent } from './estrutura-ng-if/estrutura-ng-if.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlanCardsComponent,
    BindComponent,
    TwoWayBindComponent,
    EstruturaNgForComponent,
    AttrNgStyleComponent,
    AttrNgClassComponent,
    PipesComponent,
    EstruturaNgIfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PlanCardsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
