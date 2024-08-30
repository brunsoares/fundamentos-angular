import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-subtitle, [appCardTextSubtitle]',
  host: { class: 'ca-u-card-text-subtitle' },
})
export class CardTextSubtitleDirective {}
