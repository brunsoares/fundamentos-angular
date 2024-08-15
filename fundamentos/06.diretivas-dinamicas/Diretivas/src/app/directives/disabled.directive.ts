import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
})
export class DisabledDirective {
  // Pelo hostbindind podemos pegar atributos (attr.disabled) e propriedades (disabled)
  @HostBinding('disabled') disabled = false;
}
