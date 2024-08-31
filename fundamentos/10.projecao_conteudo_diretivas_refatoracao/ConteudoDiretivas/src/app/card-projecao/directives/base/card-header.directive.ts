import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: { class: 'ca-u-card__header' },
})
export class CardHeaderDirective {}
