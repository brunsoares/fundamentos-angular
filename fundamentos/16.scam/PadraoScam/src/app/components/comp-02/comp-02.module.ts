import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowTextPipeModule } from '../../pipes/show-text-pipe/show-text-pipe.module';
import { Comp02Component } from './comp-02.component';

@NgModule({
  declarations: [Comp02Component],
  imports: [CommonModule, ShowTextPipeModule],
  exports: [Comp02Component],
})
export class Comp02Module {}
