import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective implements OnChanges {
  @Input() color: string = '';

  @HostBinding('style.color') elColor: string = 'purple';

  ngOnChanges() {
    this.elColor = this.color;
  }
}
