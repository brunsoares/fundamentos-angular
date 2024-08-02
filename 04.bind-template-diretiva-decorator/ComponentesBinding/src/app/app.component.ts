import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'ComponentesBinding';
  inputValue: string = 'Valor Inicial por binding';
  inputType: string = 'text';
  inputDisabled: boolean = false;
  //-------
  buttonTitle: string = 'Titulo botão binding';
  buttonDisabled: boolean = true;
  //-------
  divBackgroundColor: string = 'purple';
  //-------
  divChangeClass: boolean = false;

  /**
   * Habilita / Desabilita o input
   * @param state - Estado do input
   */
  enableDisableInput(state: boolean) {
    this.inputDisabled = state;
  }

  /**
   * Coloca formato de senha no input
   * @param isPassword - É formato de senha?
   */
  addRemovePassword(isPassword: boolean) {
    isPassword ? (this.inputType = 'password') : (this.inputType = 'text');
  }

  /**
   * Altera o valor inicial do input
   */
  changeInputValue() {
    this.inputValue = 'Valor inicial alterado pelo metódo!';
  }

  /**
   * Printa cada alteração no input
   * @param event - Evento do teclado
   */
  handleKeyUp(event: KeyboardEvent) {
    const inputNew = event.target as HTMLInputElement;
    console.log(inputNew?.value);
  }

  /**
   * Altera cor de fundo do input
   * @param event - Evento do input color
   */
  changeBgColor(event: Event) {
    const inputColor = event.target as HTMLInputElement;
    this.divBackgroundColor = inputColor.value;
  }

  /**
   * Toggle ao alterar a classe da div
   */
  changeClass() {
    this.divChangeClass = !this.divChangeClass;
  }
}
