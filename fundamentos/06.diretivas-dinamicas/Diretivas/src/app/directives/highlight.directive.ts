import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // Conexão entre propriedades e atributos do elemento
  @HostBinding('style.background-color') bgColor = 'transparent';

  // Conexão com os eventos do elemento
  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'purple';
  }
  @HostListener('mouseout') onMouseOut() {
    this.bgColor = 'transparent';
  }
}
