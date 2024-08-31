import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTextTitle]',
  host: { class: 'ca-c-card__title-text' },
})
export class CardTextTitleDirective {}
