import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  // Listeners reproduzem funções ao serem ativados
  @HostListener('click') clickEvent() {
    alert('Input foi clickado!');
  }

  // Podemos usar o event para pegar o valor dos listeners
  @HostListener('keyup', ['$event']) keyupEvent(event: KeyboardEvent) {
    const fullText = event.target as HTMLInputElement;
    console.log(fullText.value);
  }
}
