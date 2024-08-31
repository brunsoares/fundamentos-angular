import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-image-small, [appCardImageSmall]',
  host: { class: 'ca-u-card__small_image' },
})
export class CardImageSmallDirective {}
