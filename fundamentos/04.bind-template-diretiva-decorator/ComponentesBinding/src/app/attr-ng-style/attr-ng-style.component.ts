import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-ng-style',
  templateUrl: './attr-ng-style.component.html',
  styleUrl: './attr-ng-style.component.css',
})
export class AttrNgStyleComponent {
  fontSize: number = 45;
  textColor: string = 'purple';

  increaseFontSize() {
    this.fontSize += 5;
  }

  decreaseFontSize() {
    this.fontSize -= 5;
  }

  changeColor(colorEvent: Event) {
    let color = colorEvent.target as HTMLInputElement;
    this.textColor = color.value;
  }
}
