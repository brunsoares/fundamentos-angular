import { NgModule } from '@angular/core';
import { MaritalStatusPipe } from './marital-status.pipe';
import { DependentDocumentPipe } from './dependent-document.pipe';

@NgModule({
  declarations: [MaritalStatusPipe, DependentDocumentPipe],
  exports: [MaritalStatusPipe, DependentDocumentPipe],
})
export class PipesModule {}
