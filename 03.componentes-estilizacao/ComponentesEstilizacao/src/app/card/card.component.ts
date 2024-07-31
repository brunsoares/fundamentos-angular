import { Component, ViewEncapsulation } from '@angular/core';
import { ICard } from './cards.struct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  // encapsulation: ViewEncapsulation.None // CSS de forma global (Afeta todos e também é afetado)
  // encapsulation: ViewEncapsulation.ShadowDom // CSS de forma isolada (Componente totalmente isolado)
  // encapsulation: ViewEncapsulation.Emulated // CSS de forma encapsulada (Afeta o componente porém é afetado pelo todo)
})
export class CardComponent {
  plan: ICard = {
    type: "Simples",
    price: 179.99
  }
}
