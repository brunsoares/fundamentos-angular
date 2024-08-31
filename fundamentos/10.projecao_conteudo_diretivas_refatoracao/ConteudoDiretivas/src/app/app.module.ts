import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProjecaoComponent } from './card-projecao/card-projecao.component';
import { CardHeaderDirective } from './card-projecao/directives/base/card-header.directive';
import { CardContentDirective } from './card-projecao/directives/base/card-content.directive';
import { CardTextDirective } from './card-projecao/directives/text/card-text.directive';
import { CardImageSmallDirective } from './card-projecao/directives/image/card-image-small.directive';
import { CardImageLargeDirective } from './card-projecao/directives/image/card-image-large.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardProjecaoComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardTextDirective,
    CardImageSmallDirective,
    CardImageLargeDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
