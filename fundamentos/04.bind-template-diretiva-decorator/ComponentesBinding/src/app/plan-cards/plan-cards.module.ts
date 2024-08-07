import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';

@NgModule({
  declarations: [CardComponent, CardRoxoComponent],
  exports: [CardComponent, CardRoxoComponent],
  imports: [CommonModule],
})
export class PlanCardsModule {}
