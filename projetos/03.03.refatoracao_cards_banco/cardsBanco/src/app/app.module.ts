import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardItemLineComponent } from './components/card-item-line/card-item-line.component';
import { CardItemHeaderComponent } from './components/card-item-header/card-item-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfoComponent,
    CardItemComponent,
    CardItemLineComponent,
    CardItemHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
