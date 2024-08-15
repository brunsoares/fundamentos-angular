import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]',
})
export class InputBackgroundDirective {
  @Input() appInputBackground: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('focus') focusOver() {
    this.backgroundColor = this.appInputBackground;
  }

  @HostListener('focusout') focusOut() {
    this.backgroundColor = 'transparent';
  }
}
