import { Component } from '@angular/core';
import { ICard } from './cards.struct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  plan: ICard = {
    type: "Simples",
    price: 179.99
  }
}
