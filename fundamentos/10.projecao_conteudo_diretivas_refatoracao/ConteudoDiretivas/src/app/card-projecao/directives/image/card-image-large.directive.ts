import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-image-large, [appCardImageLarge]',
  host: { class: 'ca-u-card__large_image' },
})
export class CardImageLargeDirective {}
