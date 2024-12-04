import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformTextPipe } from './transform-text.pipe';

@NgModule({
  declarations: [TransformTextPipe],
  imports: [CommonModule],
  exports: [TransformTextPipe],
})
export class TransformTextPipeModule {}
