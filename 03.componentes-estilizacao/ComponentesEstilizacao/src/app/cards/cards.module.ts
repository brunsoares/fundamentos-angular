import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    CardComponent, 
    CardButtonComponent, 
    CardRoxoComponent, 
    CardRoxoButtonComponent,
    CardButtonCancelComponent,
  ],
  exports: [
    CardComponent, 
    CardRoxoComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ]
})
export class CardsModule { }
