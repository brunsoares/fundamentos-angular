import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTextPipe } from './show-text.pipe';

@NgModule({
  declarations: [ShowTextPipe],
  imports: [CommonModule],
  exports: [ShowTextPipe],
})
export class ShowTextPipeModule {}
