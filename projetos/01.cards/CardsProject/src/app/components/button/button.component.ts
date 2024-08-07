import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' }) buttonText: string = '';
  @Input({ required: true, alias: 'style' }) buttonStyle: 'white' | 'purple' =
    'white';
  @Input({ alias: 'disabled' }) isDisabled: boolean = false;

  @Output('emit') buttonEmitted = new EventEmitter<void>();

  /**
   * Ação do botão dentro do componente
   */
  onClickBtn() {
    this.buttonEmitted.emit();
  }
}
