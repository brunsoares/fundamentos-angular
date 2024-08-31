import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text, [appCardText]',
  host: { class: 'ca-u-card__description_text' },
})
export class CardTextDirective {}
