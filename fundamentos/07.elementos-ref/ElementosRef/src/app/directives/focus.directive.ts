import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit {
  constructor(private readonly _elRef: ElementRef) {}

  ngOnInit() {
    const inputList = this._elRef.nativeElement.querySelectorAll(
      'input'
    ) as HTMLInputElement[];

    if (inputList.length > 2) {
      inputList[2].focus();
    }
  }
}
