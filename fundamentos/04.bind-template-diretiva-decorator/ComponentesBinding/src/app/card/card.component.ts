import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // Input recebendo dados do componente pai
  @Input({ required: true }) planPrice: number = 0;

  // Get / Set manual de uma propriedade
  // private _planType: string = '';
  // @Input('planType')
  // // Intercepta operação de set do propriedade
  // set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }
  // // Devolve o valor do propriedade
  // get planType(): string {
  //   return this._planType;
  // }

  // "Get/Set" por meio do transform
  @Input({
    alias: 'planType',
    transform: (value: string) => value.toUpperCase(),
  })
  planType: string = '';

  @Output() clickButton = new EventEmitter<string>();

  onBtnClick() {
    this.clickButton.emit('Plano adquirido');
  }
}
