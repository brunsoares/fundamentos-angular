import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent],
  exports: [ButtonComponent, CardComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
