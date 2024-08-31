import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
  host: { class: 'ca-u-card__content' },
})
export class CardContentDirective {}
