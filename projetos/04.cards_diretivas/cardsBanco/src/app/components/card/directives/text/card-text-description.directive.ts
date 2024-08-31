import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTextDescription]',
  host: { class: 'ca-c-card__description-text' },
})
export class CardTextDescriptionDirective {}
