import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // Necessário a classe css estar no escopo da diretiva + componente
  // Podemos utilizar de diversas formas também, parecido com o style
  @HostBinding('class') class = 'paragrafo-class-directive';
}
