import { NgModule } from '@angular/core';
import { MaritalStatusPipe } from './marital-status.pipe';
import { DependentDocumentPipe } from './dependent-document.pipe';
import { PhoneMaskPipe } from './phone-mask.pipe';
import { PlaceholderPhonePipe } from './placeholder-phone.pipe';

@NgModule({
  declarations: [
    MaritalStatusPipe,
    DependentDocumentPipe,
    PhoneMaskPipe,
    PlaceholderPhonePipe,
  ],
  exports: [
    MaritalStatusPipe,
    DependentDocumentPipe,
    PhoneMaskPipe,
    PlaceholderPhonePipe,
  ],
})
export class PipesModule {}
