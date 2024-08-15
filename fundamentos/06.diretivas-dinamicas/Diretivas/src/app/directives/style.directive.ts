import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  // Podemos fazer o style com diversos valores (multiplas / unica propriedades )
  @HostBinding('style') style = {
    backgroundColor: 'orange',
    color: 'white',
    border: '1px solid purple',
  };

  @HostBinding('style.fontSize.px') pixelFont = 40;
}
