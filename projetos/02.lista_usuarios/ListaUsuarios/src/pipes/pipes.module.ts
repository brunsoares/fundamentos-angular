import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashEmptyPipe } from './dash-empty.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe, DashEmptyPipe],
  imports: [CommonModule],
  exports: [PhonePipe, AddressPipe, StatusPipe, DashEmptyPipe],
})
export class PipesModule {}
