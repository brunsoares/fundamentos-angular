import { Component } from '@angular/core';

interface Card {
  type: string;
  price: number;
  style: 'orange' | 'purple';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CardsProject';

  cardSimple: Card = {
    type: 'Simples',
    price: 100,
    style: 'orange',
  };

  cardAdvanced: Card = {
    type: 'Avançado',
    price: 500,
    style: 'purple',
  };

  /**
   * Ação de retorno do componente filho
   */
  btnClicked() {
    alert('Plano adquirido!');
  }
}
