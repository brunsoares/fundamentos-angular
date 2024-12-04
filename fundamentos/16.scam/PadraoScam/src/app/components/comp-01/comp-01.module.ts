import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowTextPipeModule } from '../../pipes/show-text-pipe/show-text-pipe.module';
import { TransformTextPipeModule } from '../../pipes/transform-text-pipe/transform-text-pipe.module';
import { Comp01Component } from './comp-01.component';

@NgModule({
  declarations: [Comp01Component],
  imports: [CommonModule, ShowTextPipeModule, TransformTextPipeModule],
  exports: [Comp01Component],
})
export class Comp01Module {}
